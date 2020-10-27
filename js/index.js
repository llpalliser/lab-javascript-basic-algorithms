// Iteration 1: Names and Input
// Intertion 1: Names and Input

const hacker1 = "Llorenç";
const hacker2 = "Renzo";
console.log (`The driver's name is ${hacker1}`);
console.log (`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)}

// Iteration 3: Loops

//3.1
let driver = '';
for (let char of hacker1) {
  // console.log (char.toUpperCase())
  driver += char.toUpperCase() + ' '
}
console.log(driver)

//3.2
let navigator = "";
for (let i=hacker2.length-1; i>=0; i--) {
      navigator = navigator + hacker2[i];
}
console.log(navigator)

//3.3

if (hacker1 < hacker2) {
    console.log(`The driver's name goes first.`);
    } else if (hacker1 > hacker2) {
        console.log(`Yo, the navigator goes first definitely.`);
    }
    else {
    console.log(`What?! You both have the same name?`)}

// Bonus Time!
// Bonus 1:

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt est erat, ac efficitur risus feugiat vitae. Morbi arcu ante, molestie ultricies erat nec,vulputate pulvinar mauris. Vestibulum sollicitudin nisi vel ligula posuere, a tincidunt diam eleifend. Fusce vehicula elit quis ex tempus laoreet. Vivamus ac aliquet nulla. Quisque risus orci, egestas ac leo eu, rutrum sollicitudin est. Sed ac nibh lectus. Duis ultricies, enim nec tincidunt iaculis, nulla lectus cursus nisl, vel accumsan eros erat sit amet ex. Sed sit amet ipsum eu metus blandit luctus. Cras ullamcorper scelerisque erat, non gravida dolor pharetra sed. Nunc ac orci et purus maximus tincidunt. Suspendisse mi odio, commodo in massa et, vestibulum tincidunt arcu. \n Quisque vel porta augue, sit amet porttitor libero. In hac habitasse platea dictumst. Cras hendrerit dolor a hendrerit bibendum. Nunc placerat sagittis maximus. Sed id sodales nisi. Morbi sapien neque, interdum et massa ac, aliquet ullamcorper purus. Nunc ligula odio, porta non vulputate vitae, mattis a enim. Aliquam hendrerit ac urna ut tristique. Duis vel nibh turpis. Integer ultrices non libero sit amet ultricies. In luctus lorem in accumsan accumsan. Pellentesque dignissim ullamcorper risus, in varius lorem. Nam quis massa turpis. Duis tincidunt nibh eget nunc posuere tempus. Ut sit amet neque at risus lacinia finibus at sit amet turpis. Donec congue nulla ac volutpat vestibulum. \n Pellentesque eu aliquet eros. Quisque pharetra erat id faucibus sagittis. Suspendisse a velit vitae erat scelerisque porta vitae vel felis. Donec quis auctor enim, vel pretium orci. Mauris facilisis a risus fermentum tristique. Integer ultricies, quam eget fringilla posuere, lectus risus porta massa, at rhoncus est sapien ac augue. Cras malesuada enim nulla, sit amet sollicitudin massa finibus sed. Nullam ornare facilisis turpis. Proin enim sem, lacinia commodo accumsan vel, eleifend id quam. Integer sodales, lorem aliquet vulputate convallis, dui eros euismod nunc, vel blandit purus ipsum ac justo. Quisque vestibulum aliquet nisi, non sagittis sapien blandit nec. Proin elit magna, condimentum nec mi vel, scelerisque pharetra libero. Aliquam faucibus lorem vitae tempus condimentum. Etiam id felis dolor. Vivamus pharetra erat turpis, at euismod nunc rutrum ac. Suspendisse sit amet tempor magna."

let totalWords = 0;
 let words;
 let et;
 let etCount = 0;

 for (let paragraph of paragraphs) {
     words = paragraph.split(' ');
     et = words.join(' ').split(' et ');
     etCount += et.length;
     totalWords += words.length;

 }

 console.log(`total words -> ${totalWords}`);
 console.log(`total et -> ${etCount}`); 