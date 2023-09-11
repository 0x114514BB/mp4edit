// import { MP4TreeNode } from '../src/MP4TreeNode';
import { MP4Tree } from '../src/mp4Tree';
//import {open} from 'fs/promises'

// const fileStr = './tests/test-file.mp4';
const alice = './tests/Alice_Tag.m4a';
/*
const g = async () => {
    const mp4 = new MP4Tree(alice);
    await mp4.parse();
    console.log("A");
    const moov = mp4.root.getChild("moov");
    const meta = moov?.ensureChild("udta.meta");
    console.log(meta?.toString());
    if(moov){
        moov.parent = undefined;
        let iter: MP4TreeNode|undefined = moov;
        while(iter){
            console.log(`${iter.getPath()}: ${iter.offset}, ${iter.size}`);
            iter = iter.hasNext();
        }
    }

}
g();

*/


const tagTest =async () => {
  const mp4 = new MP4Tree(alice);
  await mp4.parse();
  console.log("A");
  mp4.setTag('./tests/out.mp4', {cover: "./tests/cover.jpeg", desc: "TEST_DESC", artist: "Amamiya"});
  // await open('./tests/out.mp4', 'w').then(
  //     fd => 
  // )
};

tagTest();
