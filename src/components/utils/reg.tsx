export default function regTest(str: string) {
  let reg = /ux\/landingsite\/(.*)(-)?(\d+)\.(min|chunk)(\.js).*/g;
  return str.replace(reg, '$1');
  
}
let str = 'stnew03/ux/landingsite/main-18019983223.min.js/';
