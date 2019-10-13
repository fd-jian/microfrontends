import React, { useEffect } from 'react';

export default ({ name, path }) => {

  useEffect(() => {
    fetch(`${path}/component-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        loadScripts(manifest, name);
      })
      .catch(e => console.log(e));
  }, []);

  return <div id={`${name}-container`} />;

}

function createScriptTag(scriptName, onload) {

  const script = document.createElement('script');
  //script.id = scriptId;
  script.src = scriptName;
  script.onload = onload;

  console.log('created script', scriptName)

  document.body.appendChild(script);
}


function loadScripts({ scripts }, name) {

  let count = scripts.length 

  const done = () => {
    count--;
    if (count === 0) {
      console.log('mounting', name)
      window[name].mount(`${name}-container`);
    }
  }

  scripts.forEach(script => {
    createScriptTag(script, done);
  });

}
