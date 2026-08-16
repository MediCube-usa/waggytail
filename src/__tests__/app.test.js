import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';

test('static app implements the Waggie Tail visual reset',async()=>{
  const html=await readFile('index.html','utf8');
  const js=await readFile('src/app.js','utf8');
  const css=await readFile('src/styles.css','utf8');
  assert.match(html,/Waggie Tail/);
  assert.match(js,/The Social World for Dogs/);
  assert.match(js,/Profiles','Posts','Friends','Dating','Groups','Events/);
  assert.match(js,/while preserving the warm social product/);
  assert.doesNotMatch(js,/Instagram-grade|TikTok-speed|Pinterest-level|AI video/i);
  assert.match(css,/--cream:#fbf2df/);
  assert.match(css,/dogFace/);
  assert.match(css,/bottomNav/);
});
