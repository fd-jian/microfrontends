import React, { useEffect, useState } from 'react';
import indicator from './indicator.svg';

export default ({ name, path }) => {

  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(`${path}/component-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        loadScripts(manifest, name, setDone);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      {!done && <img src={indicator} />}
      <div id={`${name}-container`}/>
    </>
  );
}

function createScriptTag(scriptName, onload) {

  const script = document.createElement('script');
  //script.id = scriptId;
  script.src = scriptName;
  script.onload = onload;

  console.log('created script', scriptName)

  document.body.appendChild(script);
}


function loadScripts({ scripts }, name, setDone) {

  let count = scripts.length 

  const done = () => {
    count--;
    if (count === 0) {
      console.log('mounting', name)
      window[name].mount(`${name}-container`);
      setDone(true);
    }
  }

  scripts.forEach(script => {
    createScriptTag(script, done);
  });

}
