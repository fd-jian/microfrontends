import React, { useEffect, useState } from 'react';
import indicator from './indicator.svg';

export default ({ path, user }) => {

  const [tagName, setTagname] = useState(null);

  useEffect(() => {
    fetch(`${path}/component-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        loadScripts(manifest, (tagName) => {
          console.log('loaded', path)
          setTagname(tagName);
        });
      })
      .catch(e => console.log(e));
  }, []);

  const FrontendTag = tagName;

  return tagName ? <FrontendTag user={user}/> : <img src={indicator} />;
}

function createScriptTag(scriptName, onload) {

  const script = document.createElement('script');
  //script.id = scriptId;
  script.src = scriptName;
  script.onload = onload;

  console.log('created script', scriptName)

  document.body.appendChild(script);
}


function loadScripts({ tagName, scripts }, mounted) {

  let count = scripts.length 

  const done = () => {
    count--;
    if (count === 0) {
      mounted(tagName);
    }
  }

  scripts.forEach(script => {
    createScriptTag(script, done);
  });

}
