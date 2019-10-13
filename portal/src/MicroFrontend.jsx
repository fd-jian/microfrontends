import React, { useEffect, useState } from 'react';
import indicator from './indicator.svg';


export default ({ name, path }) => {

  const [done, setDone] = useState(false);

  useEffect(() => {

    // add cache control here (maybe expire date)
    const mountFunction = window.mount[name];

    if (mountFunction) {
      mountFunction();
      return;
    }

    fetch(`${path}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        loadScripts(manifest, name, setDone);
      })
      .catch(e => console.log(e));
  });

  return (
    <>
      {!done && <img src={indicator} />}
      <div id={`${name}-container`}/>
    </>
  );
}

function createScriptTag(scriptName, manifest, onload) {

  const script = document.createElement('script');
  //script.id = scriptId;
  script.src = `${manifest['files'][scriptName]}`;
  script.onload = onload;

  console.log('created script', scriptName)

  document.body.appendChild(script);
}


function loadScripts(manifest, name, setDone) {

  // problem known https://github.com/facebook/create-react-app/issues/5306
  const scripts = [
  //  'runtime-main.js', 
  //  'static/js/2.360c2576.chunk.js', 
    'main.js'
  ];

  let count = scripts.length 

  const done = () => {
    count--;
    if (count === 0) {
      console.log('mounting', name)
      window.mount[name]();
      setDone(true);
    }
  }

  scripts.forEach(script => {
    createScriptTag(script, manifest, done);
  });

}
