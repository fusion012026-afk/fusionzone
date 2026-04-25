/* ============================================
   KidLearn Pro - Premium Education Platform
   Complete JavaScript - SPA Router & Logic
   ============================================ */

// ==================== DATA ====================

const classData = {
  lkg: {
    name: "LKG",
    fullName: "Lower Kindergarten",
    category: "preprimary",
    color: "#FF6B6B",
    icon: "🅰️",
    chapters: 12,
    lessons: 36,
    subjects: ["English", "Mathematics", "EVS"],
    chaptersList: [
      {
        id: "lkg-ch1",
        title: "Alphabets A-F",
        icon: "🔤",
        subchapters: [
          {
            id: "lkg-ch1-sub1",
            title: "Letter A - Apple",
            videoId: "LHvIqIwOZI0",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>In this lesson, your child will learn about the letter <strong>A</strong>. The letter A is the first letter of the English alphabet. It makes the "ah" sound as in <strong>Apple</strong>.</p>
                      <ul><li>Capital A looks like a triangle with a line in the middle</li><li>Small a looks like a round circle with a tail on the right side</li><li>Words starting with A: Apple, Ant, Arrow, Aeroplane, Arm</li><li>Practice writing A in both capital and small forms</li><li>Find objects around you that start with A</li></ul>
                      <p>Encourage your child to say "A for Apple" multiple times. Use flashcards with pictures of objects starting with A to reinforce learning.</p>`,
            quiz: [
              {
                q: "Which letter comes first in the alphabet?",
                options: ["B", "A", "C", "D"],
                answer: 1,
              },
              {
                q: '"A" stands for which fruit?',
                options: ["Banana", "Orange", "Apple", "Grapes"],
                answer: 2,
              },
              {
                q: "Which of these starts with letter A?",
                options: ["Ball", "Cat", "Dog", "Ant"],
                answer: 3,
              },
              {
                q: "How many strokes do we need to write capital A?",
                options: ["1", "2", "3", "4"],
                answer: 2,
              },
              {
                q: "Which picture shows something starting with A?",
                options: ["Book", "Arrow", "Fish", "Milk"],
                answer: 1,
              },
            ],
          },
          {
            id: "lkg-ch1-sub2",
            title: "Letter B - Ball",
            videoId: "fMbFN00HfMY",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn about the letter <strong>B</strong>. The letter B comes after A in the alphabet. It makes the "buh" sound as in <strong>Ball</strong>.</p>
                      <ul><li>Capital B has two bumps and a straight line</li><li>Small b has one bump and a tall line going up</li><li>Words starting with B: Ball, Bat, Butterfly, Bird, Banana</li><li>Practice tracing B in the air with your finger</li><li>Draw objects that start with B in your notebook</li></ul>
                      <p>Make the "buh" sound together with your child. Show them how your lips come together when saying B.</p>`,
            quiz: [
              {
                q: "B comes after which letter?",
                options: ["C", "A", "D", "E"],
                answer: 1,
              },
              {
                q: '"B" stands for which toy?',
                options: ["Car", "Doll", "Ball", "Kite"],
                answer: 2,
              },
              {
                q: "Which insect starts with B?",
                options: ["Ant", "Bee", "Cat", "Fly"],
                answer: 1,
              },
              {
                q: "Capital B has how many bumps?",
                options: ["One", "Two", "Three", "Zero"],
                answer: 1,
              },
              {
                q: "Which fruit starts with B?",
                options: ["Apple", "Mango", "Banana", "Grapes"],
                answer: 2,
              },
            ],
          },
          {
            id: "lkg-ch1-sub3",
            title: "Letters C, D, E, F",
            videoId: "36mKosfn9SY",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>In this lesson, we will learn four more letters: <strong>C, D, E, and F</strong>. Each letter has its own special sound!</p>
                      <ul><li><strong>C</strong> - says "kuh" like Cat, Cup, Cake, Car</li><li><strong>D</strong> - says "duh" like Dog, Duck, Door, Drum</li><li><strong>E</strong> - says "eh" like Egg, Elephant, Eye, Ear</li><li><strong>F</strong> - says "fuh" like Fish, Fan, Flower, Frog</li></ul>
                      <p>Practice writing each letter 5 times. Try to remember one word for each letter. Sing the alphabet song to remember the order!</p>`,
            quiz: [
              {
                q: 'Which letter says "kuh"?',
                options: ["A", "B", "C", "D"],
                answer: 2,
              },
              {
                q: '"D" stands for which animal?',
                options: ["Cat", "Elephant", "Dog", "Fish"],
                answer: 2,
              },
              {
                q: "Which letter comes between D and F?",
                options: ["C", "E", "B", "G"],
                answer: 1,
              },
              {
                q: '"F" stands for which animal that lives in water?',
                options: ["Dog", "Cat", "Bird", "Fish"],
                answer: 3,
              },
              {
                q: "Which of these starts with E?",
                options: ["Fan", "Egg", "Ball", "Dog"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "lkg-ch2",
        title: "Alphabets G-L",
        icon: "📝",
        subchapters: [
          {
            id: "lkg-ch2-sub1",
            title: "Letters G, H, I",
            videoId: "Y1iMVl3TYg0",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's continue our alphabet journey with <strong>G, H, and I</strong>!</p>
                      <ul><li><strong>G</strong> - says "guh" like Girl, Goat, Grape, Green</li><li><strong>H</strong> - says "huh" like House, Hat, Hen, Horse</li><li><strong>I</strong> - says "ih" like Ice cream, Ink, Igloo, Iron</li></ul>
                      <p>Practice making the sounds clearly. Try to find things in your home that start with these letters!</p>`,
            quiz: [
              {
                q: '"G" stands for which fruit?',
                options: ["Apple", "Grape", "Banana", "Orange"],
                answer: 1,
              },
              {
                q: 'Which letter says "huh"?',
                options: ["G", "I", "H", "J"],
                answer: 2,
              },
              {
                q: '"I" stands for which cold treat?',
                options: ["Cake", "Bread", "Ice cream", "Milk"],
                answer: 2,
              },
              {
                q: "Which animal starts with H?",
                options: ["Cat", "Hen", "Dog", "Pig"],
                answer: 1,
              },
              {
                q: "G comes after which letter?",
                options: ["E", "F", "H", "I"],
                answer: 1,
              },
            ],
          },
          {
            id: "lkg-ch2-sub2",
            title: "Letters J, K, L",
            videoId: "0kMR_kqOJmE",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Now let's learn <strong>J, K, and L</strong>!</p>
                      <ul><li><strong>J</strong> - says "juh" like Jug, Jump, Jelly, Jungle</li><li><strong>K</strong> - says "kuh" like Kite, King, Key, Kitchen</li><li><strong>L</strong> - says "luh" like Lion, Lamp, Leaf, Lemon</li></ul>
                      <p>Notice how K and C can sound similar! This is a special rule in English. Practice saying each letter clearly.</p>`,
            quiz: [
              {
                q: '"J" stands for which toy that flies?',
                options: ["Ball", "Kite", "Jug", "Car"],
                answer: 1,
              },
              {
                q: "Which letter sounds similar to C?",
                options: ["J", "L", "K", "H"],
                answer: 2,
              },
              {
                q: '"L" stands for which big cat?',
                options: ["Tiger", "Cat", "Lion", "Dog"],
                answer: 2,
              },
              {
                q: "Which fruit starts with L?",
                options: ["Mango", "Lemon", "Apple", "Grape"],
                answer: 1,
              },
              {
                q: "J comes after which letter?",
                options: ["H", "I", "K", "L"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "lkg-ch3",
        title: "Numbers 1-10",
        icon: "🔢",
        subchapters: [
          {
            id: "lkg-ch3-sub1",
            title: "Numbers 1-5",
            videoId: "DR-cR9iB3gk",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn to count from <strong>1 to 5</strong>!</p>
                      <ul><li><strong>1 - One</strong>: Show one finger. One sun, one moon.</li><li><strong>2 - Two</strong>: Show two fingers. Two eyes, two ears.</li><li><strong>3 - Three</strong>: Show three fingers. Three wheels on a tricycle.</li><li><strong>4 - Four</strong>: Show four fingers. Four legs on a dog.</li><li><strong>5 - Five</strong>: Show five fingers. Five fingers on one hand!</li></ul>
                      <p>Practice counting objects around you. Count your fingers, count toys, count spoons!</p>`,
            quiz: [
              {
                q: "How many fingers on one hand?",
                options: ["3", "4", "5", "6"],
                answer: 2,
              },
              {
                q: "Which number comes after 2?",
                options: ["1", "4", "3", "5"],
                answer: 2,
              },
              {
                q: "How many eyes do you have?",
                options: ["One", "Two", "Three", "Four"],
                answer: 1,
              },
              {
                q: "A tricycle has how many wheels?",
                options: ["Two", "Three", "Four", "Five"],
                answer: 1,
              },
              {
                q: "What is the first number we learn?",
                options: ["Zero", "Two", "One", "Ten"],
                answer: 2,
              },
            ],
          },
          {
            id: "lkg-ch3-sub2",
            title: "Numbers 6-10",
            videoId: "e0dJW5QaOHQ",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Now let's learn numbers <strong>6 to 10</strong>!</p>
                      <ul><li><strong>6 - Six</strong>: Six is one more than five. An insect has six legs!</li><li><strong>7 - Seven</strong>: Seven days in a week. A rainbow has seven colors!</li><li><strong>8 - Eight</strong>: Eight legs on a spider. An octagon has eight sides.</li><li><strong>9 - Nine</strong>: Nine planets in our solar system (including Pluto!).</li><li><strong>10 - Ten</strong>: Ten fingers on both hands! Ten is a complete set.</li></ul>
                      <p>Now you can count from 1 to 10! Practice counting different objects every day.</p>`,
            quiz: [
              {
                q: "How many days are in a week?",
                options: ["Five", "Six", "Seven", "Eight"],
                answer: 2,
              },
              {
                q: "How many legs does a spider have?",
                options: ["Six", "Seven", "Eight", "Ten"],
                answer: 2,
              },
              {
                q: "Which number comes before 10?",
                options: ["Eight", "Nine", "Seven", "Six"],
                answer: 1,
              },
              {
                q: "How many legs does an insect have?",
                options: ["Four", "Six", "Eight", "Ten"],
                answer: 1,
              },
              {
                q: "A rainbow has how many colors?",
                options: ["Five", "Six", "Seven", "Eight"],
                answer: 2,
              },
            ],
          },
        ],
      },
      {
        id: "lkg-ch4",
        title: "Shapes & Colors",
        icon: "🎨",
        subchapters: [
          {
            id: "lkg-ch4-sub1",
            title: "Basic Shapes",
            videoId: "a-GlpTkMYEk",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn about <strong>shapes</strong> that we see around us every day!</p>
                      <ul><li><strong>Circle</strong>: Round like a ball, clock, or pizza. It has no corners!</li><li><strong>Square</strong>: Has 4 equal sides and 4 corners, like a window or a chess board.</li><li><strong>Triangle</strong>: Has 3 sides and 3 corners, like a roof or a slice of pizza.</li><li><strong>Rectangle</strong>: Has 4 sides (2 long, 2 short), like a door or a book.</li></ul>
                      <p>Go on a shape hunt! Find circles, squares, triangles, and rectangles in your home.</p>`,
            quiz: [
              {
                q: "Which shape has no corners?",
                options: ["Square", "Triangle", "Circle", "Rectangle"],
                answer: 2,
              },
              {
                q: "A triangle has how many sides?",
                options: ["Two", "Three", "Four", "Five"],
                answer: 1,
              },
              {
                q: "Which shape looks like a door?",
                options: ["Circle", "Triangle", "Square", "Rectangle"],
                answer: 3,
              },
              {
                q: "A square has how many equal sides?",
                options: ["Two", "Three", "Four", "Five"],
                answer: 2,
              },
              {
                q: "Which shape looks like a ball?",
                options: ["Square", "Rectangle", "Triangle", "Circle"],
                answer: 3,
              },
            ],
          },
          {
            id: "lkg-ch4-sub2",
            title: "Primary Colors",
            videoId: "rT9eLBFH1dE",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn about <strong>colors</strong>! There are three primary colors that mix to make other colors.</p>
                      <ul><li><strong>Red</strong> - like an apple, a rose, or a fire truck</li><li><strong>Blue</strong> - like the sky, the ocean, or a blueberry</li><li><strong>Yellow</strong> - like the sun, a banana, or a sunflower</li><li>Mixing Red + Yellow = <strong>Orange</strong></li><li>Mixing Blue + Yellow = <strong>Green</strong></li><li>Mixing Red + Blue = <strong>Purple</strong></li></ul>
                      <p>Try mixing colors with paint or crayons at home! It's like magic!</p>`,
            quiz: [
              {
                q: "Which is NOT a primary color?",
                options: ["Red", "Green", "Blue", "Yellow"],
                answer: 1,
              },
              {
                q: "Red + Yellow makes which color?",
                options: ["Green", "Purple", "Orange", "Pink"],
                answer: 2,
              },
              {
                q: "Blue + Yellow makes which color?",
                options: ["Orange", "Green", "Purple", "Red"],
                answer: 1,
              },
              {
                q: "Which color is a banana?",
                options: ["Red", "Blue", "Yellow", "Green"],
                answer: 2,
              },
              {
                q: "Red + Blue makes which color?",
                options: ["Orange", "Green", "Pink", "Purple"],
                answer: 3,
              },
            ],
          },
        ],
      },
      {
        id: "lkg-ch5",
        title: "Animals & Birds",
        icon: "🦁",
        subchapters: [
          {
            id: "lkg-ch5-sub1",
            title: "Pet Animals",
            videoId: "7NOSDKb0HlU",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn about <strong>pet animals</strong> - animals that live with us in our homes!</p>
                      <ul><li><strong>Dog</strong> - Dogs are loyal friends. They bark and love to play fetch.</li><li><strong>Cat</strong> - Cats say "meow". They love to drink milk and chase mice.</li><li><strong>Rabbit</strong> - Rabbits have long ears and love to eat carrots.</li><li><strong>Fish</strong> - Fish live in water and swim using their fins and tail.</li><li><strong>Parrot</strong> - Parrots are colorful birds that can copy what we say!</li></ul>
                      <p>Do you have a pet at home? Tell us about it! Remember to always be kind to animals.</p>`,
            quiz: [
              {
                q: 'Which pet animal says "meow"?',
                options: ["Dog", "Cat", "Rabbit", "Fish"],
                answer: 1,
              },
              {
                q: "Which animal loves to eat carrots?",
                options: ["Dog", "Cat", "Rabbit", "Parrot"],
                answer: 2,
              },
              {
                q: "Fish live in ___?",
                options: ["Trees", "Water", "Mountains", "Desert"],
                answer: 1,
              },
              {
                q: "Which bird can copy what we say?",
                options: ["Crow", "Parrot", "Eagle", "Sparrow"],
                answer: 1,
              },
              {
                q: "Dogs are known for being ___?",
                options: ["Lazy", "Loyal", "Slow", "Quiet"],
                answer: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  ukg: {
    name: "UKG",
    fullName: "Upper Kindergarten",
    category: "preprimary",
    color: "#FFA94D",
    icon: "🅱️",
    chapters: 12,
    lessons: 40,
    subjects: ["English", "Mathematics", "EVS", "Hindi"],
    chaptersList: [
      {
        id: "ukg-ch1",
        title: "Alphabets M-Z",
        icon: "🔤",
        subchapters: [
          {
            id: "ukg-ch1-sub1",
            title: "Letters M-P",
            videoId: "bELqtR5Oaqg",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Now we learn letters <strong>M, N, O, and P</strong> - the middle of the alphabet!</p>
                  <ul><li><strong>M</strong> - says "muh" like Monkey, Mango, Moon, Milk</li><li><strong>N</strong> - says "nuh" like Nest, Nose, Night, Nut</li><li><strong>O</strong> - says "oh" like Orange, Owl, Onion, Ox</li><li><strong>P</strong> - says "puh" like Penguin, Pen, Pizza, Pig</li></ul>
                  <p>Practice writing these letters and finding words that start with each one!</p>`,
            quiz: [
              {
                q: '"M" stands for which fruit?',
                options: ["Orange", "Mango", "Apple", "Grape"],
                answer: 1,
              },
              {
                q: "Which letter comes between N and P?",
                options: ["M", "O", "Q", "L"],
                answer: 1,
              },
              {
                q: '"O" stands for which bird?',
                options: ["Parrot", "Penguin", "Owl", "Eagle"],
                answer: 2,
              },
              {
                q: "Which animal starts with P and loves pizza?",
                options: ["Monkey", "Nest", "Pig", "Ox"],
                answer: 2,
              },
              {
                q: "We see the Moon at ___?",
                options: ["Morning", "Night", "Noon", "Afternoon"],
                answer: 1,
              },
            ],
          },
          {
            id: "ukg-ch1-sub2",
            title: "Letters Q-T",
            videoId: "gMB3kILQyF8",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn <strong>Q, R, S, and T</strong>!</p>
                  <ul><li><strong>Q</strong> - says "kwuh" like Queen, Question, Quiet, Quiz</li><li><strong>R</strong> - says "ruh" like Rainbow, Rabbit, Rose, Ring</li><li><strong>S</strong> - says "sss" like Sun, Star, Snake, School</li><li><strong>T</strong> - says "tuh" like Tiger, Tree, Train, Table</li></ul>
                  <p>Notice that Q is almost always followed by U in English words! This is a special spelling rule.</p>`,
            quiz: [
              {
                q: "Q is almost always followed by which letter?",
                options: ["V", "W", "U", "R"],
                answer: 2,
              },
              {
                q: '"R" stands for which colorful arch in the sky?',
                options: ["Sun", "Star", "Rainbow", "Cloud"],
                answer: 2,
              },
              {
                q: 'Which letter makes a snake-like "sss" sound?',
                options: ["T", "R", "Q", "S"],
                answer: 3,
              },
              {
                q: '"T" stands for which big cat?',
                options: ["Lion", "Tiger", "Cat", "Dog"],
                answer: 1,
              },
              {
                q: "Which letter comes after S?",
                options: ["R", "U", "T", "V"],
                answer: 2,
              },
            ],
          },
          {
            id: "ukg-ch1-sub3",
            title: "Letters U-Z",
            videoId: "hC8BmK8YnQI",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>We've reached the end of the alphabet! Let's learn <strong>U, V, W, X, Y, Z</strong>!</p>
                  <ul><li><strong>U</strong> - says "uh" like Umbrella, Under, Unicorn, Up</li><li><strong>V</strong> - says "vuh" like Van, Violin, Vest, Volcano</li><li><strong>W</strong> - says "wuh" like Water, Whale, Watch, Window</li><li><strong>X</strong> - says "ks" like X-ray, Xylophone, Fox, Box</li><li><strong>Y</strong> - says "yuh" like Yellow, Yawn, Yacht, Yogurt</li><li><strong>Z</strong> - says "zzz" like Zebra, Zero, Zoo, Zigzag</li></ul>
                  <p>Congratulations! You now know ALL 26 letters of the English alphabet! 🎉</p>`,
            quiz: [
              {
                q: "How many letters are in the English alphabet?",
                options: ["24", "25", "26", "28"],
                answer: 2,
              },
              {
                q: '"U" stands for which thing that protects from rain?',
                options: ["Van", "Umbrella", "Watch", "Zoo"],
                answer: 1,
              },
              {
                q: "Which animal starts with Z and has stripes?",
                options: ["Tiger", "Yak", "Zebra", "Whale"],
                answer: 2,
              },
              {
                q: '"W" stands for which liquid we drink?',
                options: ["Umbrella", "Violin", "Water", "Yogurt"],
                answer: 2,
              },
              {
                q: "Which is the last letter of the alphabet?",
                options: ["X", "Y", "W", "Z"],
                answer: 3,
              },
            ],
          },
        ],
      },
      {
        id: "ukg-ch2",
        title: "Two-Letter Words",
        icon: "📖",
        subchapters: [
          {
            id: "ukg-ch2-sub1",
            title: "Simple Two-Letter Words",
            videoId: "jJJwNjgk0nk",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Now that you know all the letters, let's start making <strong>two-letter words</strong>!</p>
                  <ul><li><strong>at</strong> - cat, bat, hat, mat, rat, sat, fat</li><li><strong>an</strong> - can, fan, man, pan, ran, van</li><li><strong>it</strong> - sit, bit, hit, kit, pit</li><li><strong>in</strong> - pin, bin, tin, win, fin</li><li><strong>on</strong> - son, won, don, con</li></ul>
                  <p>These word families help you read many words quickly! Practice reading them aloud every day.</p>`,
            quiz: [
              {
                q: "Which is a two-letter word?",
                options: ["Cat", "At", "Bat", "Hat"],
                answer: 1,
              },
              {
                q: '"c-at" makes which word?',
                options: ["Car", "Cat", "Can", "Cot"],
                answer: 1,
              },
              {
                q: 'Which word family does "hat" belong to?',
                options: ["an", "it", "at", "in"],
                answer: 2,
              },
              {
                q: '"b-in" makes which word?',
                options: ["Bat", "Bit", "Bin", "Ban"],
                answer: 2,
              },
              {
                q: 'How many letters are in the word "fan"?',
                options: ["One", "Two", "Three", "Four"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "ukg-ch3",
        title: "Numbers 11-20",
        icon: "🔢",
        subchapters: [
          {
            id: "ukg-ch3-sub1",
            title: "Counting 11-20",
            videoId: "1nZGmKx0Rek",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's count beyond 10! Numbers <strong>11 to 20</strong> are called "teen" numbers.</p>
                  <ul><li><strong>11 - Eleven</strong>: One more than ten</li><li><strong>12 - Twelve</strong>: A dozen eggs!</li><li><strong>13 - Thirteen</strong>: Be careful - it's not "threeteen"!</li><li><strong>14 - Fourteen</strong>: Notice the pattern - "four" + "teen"</li><li><strong>15 - Fifteen</strong>: Half of thirty!</li><li><strong>16-20</strong>: Sixteen, Seventeen, Eighteen, Nineteen, Twenty</li></ul>
                  <p>Practice counting from 1 to 20 without stopping. Then try counting backwards from 20 to 1!</p>`,
            quiz: [
              {
                q: "What comes after 10?",
                options: ["Twenty", "Eleven", "Twelve", "Nine"],
                answer: 1,
              },
              {
                q: "A dozen means how many?",
                options: ["Ten", "Eleven", "Twelve", "Thirteen"],
                answer: 2,
              },
              {
                q: "What comes before 20?",
                options: ["Eighteen", "Sixteen", "Nineteen", "Seventeen"],
                answer: 2,
              },
              {
                q: "Which number is between 14 and 16?",
                options: ["Thirteen", "Fifteen", "Seventeen", "Twelve"],
                answer: 1,
              },
              {
                q: "What is 10 + 5?",
                options: ["Fourteen", "Fifteen", "Sixteen", "Thirteen"],
                answer: 1,
              },
            ],
          },
        ],
      },
      {
        id: "ukg-ch4",
        title: "Addition Basics",
        icon: "➕",
        subchapters: [
          {
            id: "ukg-ch4-sub1",
            title: "Adding Numbers 1-5",
            videoId: "Ggizp3FZEhI",
            hasPDF: true,
            hasQuiz: true,
            content: `<p><strong>Addition</strong> means putting things together to find out how many in total!</p>
                  <ul><li>1 + 1 = 2 (One apple and one apple = Two apples)</li><li>2 + 1 = 3 (Two birds and one more = Three birds)</li><li>2 + 2 = 4 (Two pencils and two pencils = Four pencils)</li><li>3 + 2 = 5 (Three stars and two stars = Five stars)</li><li>The "+" sign means "plus" or "add"</li><li>The "=" sign means "equals" or "is"</li></ul>
                  <p>Use your fingers or objects like buttons, coins, or crayons to practice addition!</p>`,
            quiz: [
              {
                q: "1 + 1 = ?",
                options: ["One", "Two", "Three", "Zero"],
                answer: 1,
              },
              {
                q: "2 + 2 = ?",
                options: ["Three", "Two", "Four", "Five"],
                answer: 2,
              },
              {
                q: "3 + 1 = ?",
                options: ["Three", "Two", "Five", "Four"],
                answer: 3,
              },
              {
                q: "1 + 3 = ?",
                options: ["Three", "Four", "Five", "Two"],
                answer: 1,
              },
              {
                q: 'The "+" sign means ___?',
                options: ["Minus", "Equals", "Plus/Add", "Zero"],
                answer: 2,
              },
            ],
          },
        ],
      },
      {
        id: "ukg-ch5",
        title: "My Body Parts",
        icon: "🧍",
        subchapters: [
          {
            id: "ukg-ch5-sub1",
            title: "Head to Toe",
            videoId: "BqXbJLqvqGY",
            hasPDF: true,
            hasQuiz: true,
            content: `<p>Let's learn about our amazing <strong>body</strong> and its parts!</p>
                  <ul><li><strong>Head</strong> - Where our brain, eyes, nose, mouth, and ears are</li><li><strong>Shoulders</strong> - Connect our arms to our body</li><li><strong>Arms & Hands</strong> - We use them to hold, write, and play</li><li><strong>Fingers</strong> - Five on each hand, ten in total</li><li><strong>Legs & Feet</strong> - Help us walk, run, and jump</li><li><strong>Knees</strong> - The joint between our thigh and lower leg</li></ul>
                  <p>Sing "Head, Shoulders, Knees, and Toes" to remember all your body parts!</p>`,
            quiz: [
              {
                q: "How many fingers on both hands?",
                options: ["Five", "Eight", "Ten", "Twelve"],
                answer: 2,
              },
              {
                q: "We see with our ___?",
                options: ["Ears", "Nose", "Eyes", "Mouth"],
                answer: 2,
              },
              {
                q: "We hear with our ___?",
                options: ["Eyes", "Nose", "Mouth", "Ears"],
                answer: 3,
              },
              {
                q: "Which body part helps us walk?",
                options: ["Arms", "Legs", "Head", "Fingers"],
                answer: 1,
              },
              {
                q: "Our brain is inside our ___?",
                options: ["Hand", "Leg", "Head", "Foot"],
                answer: 2,
              },
            ],
          },
        ],
      },
    ],
  },
};

// Generate class data for class 1-10
const classNames = [
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
];
const classKeys = [
  "class1",
  "class2",
  "class3",
  "class4",
  "class5",
  "class6",
  "class7",
  "class8",
  "class9",
  "class10",
];
const classColors = [
  "#FFD43B",
  "#69DB7C",
  "#4DABF7",
  "#9775FA",
  "#F06595",
  "#20C997",
  "#339AF0",
  "#845EF7",
  "#E64980",
  "#F76707",
];
const classIcons = ["📘", "📗", "📘", "📙", "📕", "📘", "📗", "📙", "📕", "📘"];
const classCategories = [
  "primary",
  "primary",
  "primary",
  "primary",
  "primary",
  "secondary",
  "secondary",
  "secondary",
  "secondary",
  "secondary",
];

const subjectsMap = {
  class1: ["English", "Mathematics", "EVS"],
  class2: ["English", "Mathematics", "EVS"],
  class3: ["English", "Mathematics", "EVS", "Hindi"],
  class4: ["English", "Mathematics", "Science", "Social Science", "Hindi"],
  class5: ["English", "Mathematics", "Science", "Social Science", "Hindi"],
  class6: [
    "English",
    "Mathematics",
    "Science",
    "Social Science",
    "Hindi",
    "Sanskrit",
  ],
  class7: [
    "English",
    "Mathematics",
    "Science",
    "Social Science",
    "Hindi",
    "Sanskrit",
  ],
  class8: [
    "English",
    "Mathematics",
    "Science",
    "Social Science",
    "Hindi",
    "Sanskrit",
  ],
  class9: ["English", "Mathematics", "Science", "Social Science", "Hindi"],
  class10: ["English", "Mathematics", "Science", "Social Science", "Hindi"],
};

const chapterTemplates = {
  class1: [
    {
      title: "Phonics & Reading",
      icon: "📖",
      subs: ["Vowel Sounds", "Consonant Blends", "Simple Sentences"],
    },
    {
      title: "Numbers up to 100",
      icon: "🔢",
      subs: ["Counting to 100", "Number Names", "Before & After"],
    },
    {
      title: "Addition & Subtraction",
      icon: "➕",
      subs: [
        "Adding 1-digit Numbers",
        "Subtracting 1-digit Numbers",
        "Word Problems",
      ],
    },
    {
      title: "Living & Non-Living",
      icon: "🌿",
      subs: [
        "What is Living?",
        "Types of Living Things",
        "Non-Living Things Around Us",
      ],
    },
    {
      title: "My Family & School",
      icon: "🏫",
      subs: ["My Family Members", "My School", "People Who Help Us"],
    },
  ],
  class2: [
    {
      title: "Grammar Basics",
      icon: "✏️",
      subs: ["Nouns", "Verbs", "Adjectives"],
    },
    {
      title: "Numbers up to 1000",
      icon: "🔢",
      subs: ["Place Value", "Comparing Numbers", "Skip Counting"],
    },
    {
      title: "Multiplication Intro",
      icon: "✖️",
      subs: ["Concept of Multiplication", "Tables 2-5", "Simple Problems"],
    },
    {
      title: "Plants & Animals",
      icon: "🌱",
      subs: ["Parts of a Plant", "Types of Plants", "Animals & Their Homes"],
    },
    {
      title: "Our Environment",
      icon: "🌍",
      subs: ["Air, Water, Food", "Clean & Green", "Seasons"],
    },
  ],
  class3: [
    {
      title: "Reading Comprehension",
      icon: "📖",
      subs: ["Short Passages", "Answer Questions", "Vocabulary Building"],
    },
    {
      title: "Multiplication & Division",
      icon: "✖️",
      subs: ["Tables 6-10", "Basic Division", "Word Problems"],
    },
    {
      title: "Fractions Intro",
      icon: "🍕",
      subs: [
        "Half & Quarter",
        "Understanding Fractions",
        "Fraction of a Group",
      ],
    },
    {
      title: "Food & Nutrition",
      icon: "🍎",
      subs: ["Types of Food", "Healthy Eating", "Food from Plants & Animals"],
    },
    {
      title: "Water & Weather",
      icon: "💧",
      subs: ["Sources of Water", "Water Cycle", "Weather & Seasons"],
    },
  ],
  class4: [
    {
      title: "Tenses & Grammar",
      icon: "✏️",
      subs: ["Present Tense", "Past Tense", "Future Tense"],
    },
    {
      title: "Large Numbers",
      icon: "🔢",
      subs: ["Numbers up to 1 Lakh", "Indian Place Value", "Roman Numerals"],
    },
    {
      title: "Geometry Basics",
      icon: "📐",
      subs: ["Lines & Angles", "Shapes & Patterns", "Perimeter"],
    },
    {
      title: "Force & Energy",
      icon: "⚡",
      subs: ["What is Force?", "Types of Energy", "Simple Machines"],
    },
    {
      title: "Our India",
      icon: "🇮🇳",
      subs: ["States & Capitals", "Festivals of India", "Famous Places"],
    },
  ],
  class5: [
    {
      title: "Advanced Grammar",
      icon: "✏️",
      subs: [
        "Active & Passive Voice",
        "Direct & Indirect Speech",
        "Prepositions",
      ],
    },
    {
      title: "Decimals & Percentages",
      icon: "🔢",
      subs: [
        "Understanding Decimals",
        "Percentage Basics",
        "Real-life Problems",
      ],
    },
    {
      title: "Area & Volume",
      icon: "📐",
      subs: ["Area of Shapes", "Volume Basics", "Word Problems"],
    },
    {
      title: "Human Body Systems",
      icon: "🫀",
      subs: ["Digestive System", "Respiratory System", "Nervous System"],
    },
    {
      title: "Solar System",
      icon: "🌌",
      subs: ["Planets", "Sun & Stars", "Moon & Tides"],
    },
  ],
  class6: [
    {
      title: "Parts of Speech Deep Dive",
      icon: "✏️",
      subs: ["All 8 Parts of Speech", "Clauses", "Phrase Types"],
    },
    {
      title: "Integers & Algebra",
      icon: "🔢",
      subs: ["Integers", "Basic Algebra", "Simple Equations"],
    },
    {
      title: "Ratio & Proportion",
      icon: "⚖️",
      subs: ["Ratio Concepts", "Proportion", "Unitary Method"],
    },
    {
      title: "Food Components",
      icon: "🧪",
      subs: ["Nutrients", "Deficiency Diseases", "Balanced Diet"],
    },
    {
      title: "History: Ancient India",
      icon: "📜",
      subs: ["Indus Valley", "Vedic Period", "Mauryan Empire"],
    },
    {
      title: "Sanskrit Basics",
      icon: "🕉️",
      subs: ["Alphabets", "Simple Words", "Basic Sentences"],
    },
  ],
  class7: [
    {
      title: "Comprehension & Writing",
      icon: "📖",
      subs: ["Passage Analysis", "Letter Writing", "Story Writing"],
    },
    {
      title: "Rational Numbers",
      icon: "🔢",
      subs: ["Rational Numbers", "Operations", "Applications"],
    },
    {
      title: "Geometry: Lines & Angles",
      icon: "📐",
      subs: ["Types of Angles", "Triangle Properties", "Congruence"],
    },
    {
      title: "Acids, Bases & Salts",
      icon: "🧪",
      subs: ["Indicators", "Neutralisation", "Everyday Chemicals"],
    },
    {
      title: "Medieval India",
      icon: "📜",
      subs: ["Delhi Sultanate", "Mughal Empire", "Bhakti Movement"],
    },
    {
      title: "Sanskrit Grammar",
      icon: "🕉️",
      subs: ["Nouns & Genders", "Verb Conjugation", "Simple Stories"],
    },
  ],
  class8: [
    {
      title: "Literature & Poetry",
      icon: "📖",
      subs: ["Poem Analysis", "Prose Study", "Figure of Speech"],
    },
    {
      title: "Algebraic Expressions",
      icon: "🔢",
      subs: ["Polynomials", "Factorization", "Identities"],
    },
    {
      title: "Mensuration",
      icon: "📐",
      subs: ["Surface Area", "Volume of Solids", "Problems"],
    },
    {
      title: "Cell & Microorganisms",
      icon: "🔬",
      subs: ["Cell Structure", "Microorganisms", "Diseases"],
    },
    {
      title: "Modern India",
      icon: "📜",
      subs: ["British Rule", "Freedom Struggle", "Independence"],
    },
    {
      title: "Sanskrit Shlokas",
      icon: "🕉️",
      subs: ["Shloka Recitation", "Meaning & Grammar", "Translation"],
    },
  ],
  class9: [
    {
      title: "Beehive: NCERT",
      icon: "📖",
      subs: ["The Fun They Had", "The Sound of Music", "The Little Girl"],
    },
    {
      title: "Number Systems",
      icon: "🔢",
      subs: ["Irrational Numbers", "Real Numbers", "Laws of Exponents"],
    },
    {
      title: "Polynomials",
      icon: "📐",
      subs: ["Degree & Types", "Zeroes & Coefficients", "Algebraic Identities"],
    },
    {
      title: "Matter: Atoms & Molecules",
      icon: "⚛️",
      subs: ["Atomic Structure", "Molecular Mass", "Chemical Reactions"],
    },
    {
      title: "Democratic Politics",
      icon: "🏛️",
      subs: ["What is Democracy?", "Constitution", "Electoral Politics"],
    },
  ],
  class10: [
    {
      title: "First Flight: NCERT",
      icon: "📖",
      subs: [
        "A Letter to God",
        "Nelson Mandela",
        "From the Diary of Anne Frank",
      ],
    },
    {
      title: "Quadratic Equations",
      icon: "🔢",
      subs: ["Standard Form", "Factorisation Method", "Quadratic Formula"],
    },
    {
      title: "Trigonometry",
      icon: "📐",
      subs: ["Trigonometric Ratios", "Identities", "Height & Distance"],
    },
    {
      title: "Life Processes",
      icon: "🫀",
      subs: ["Nutrition", "Respiration", "Transportation", "Excretion"],
    },
    {
      title: "Power Sharing",
      icon: "🏛️",
      subs: ["Federalism", "Democracy & Diversity", "Gender & Religion"],
    },
  ],
};

// Build full class data for class 1-10
classKeys.forEach((key, idx) => {
  if (!classData[key]) {
    const templates = chapterTemplates[key] || chapterTemplates.class5;
    const chaptersList = templates.map((tmpl, chIdx) => ({
      id: `${key}-ch${chIdx + 1}`,
      title: tmpl.title,
      icon: tmpl.icon,
      subchapters: tmpl.subs.map((sub, subIdx) => ({
        id: `${key}-ch${chIdx + 1}-sub${subIdx + 1}`,
        title: sub,
        videoId: "dQw4w9WgXcQ",
        hasPDF: true,
        hasQuiz: true,
        content: `<p>Welcome to the lesson on <strong>${sub}</strong> in ${classNames[idx]} - ${tmpl.title}.</p>
                <p>This chapter is part of the ${classNames[idx]} curriculum aligned with NCERT guidelines. The content is designed to build a strong foundation in this topic through clear explanations, examples, and practice exercises.</p>
                <ul><li>Understand the core concepts of ${sub}</li><li>Learn with visual examples and real-world applications</li><li>Practice with the provided worksheets and exercises</li><li>Test your understanding with the quiz section below</li><li>Download the PDF for offline revision</li></ul>
                <p>Make sure to watch the video lesson first, then read through this explanation carefully. If you have any doubts, feel free to reach out to us via WhatsApp for personalized help!</p>
                <p><strong>Key Points to Remember:</strong></p>
                <ul><li>This topic builds on concepts from previous classes</li><li>Regular practice is essential for mastery</li><li>Try to relate concepts to everyday life</li><li>Don't hesitate to ask questions if something is unclear</li></ul>`,
        quiz: [
          {
            q: `In ${classNames[idx]}, ${sub} is related to which subject?`,
            options: ["Mathematics", "English", "Science", "Social Science"],
            answer: chIdx < 2 ? 1 : chIdx < 3 ? 0 : 2,
          },
          {
            q: `The chapter "${tmpl.title}" is chapter number?`,
            options: [
              `${chIdx + 2}`,
              `${chIdx}`,
              `${chIdx + 1}`,
              `${chIdx + 3}`,
            ],
            answer: 2,
          },
          {
            q: `Which of these is important for understanding ${sub}?`,
            options: [
              "Skipping the video",
              "Regular practice",
              "Only memorizing",
              "None of these",
            ],
            answer: 1,
          },
          {
            q: `${classNames[idx]} curriculum follows which guidelines?`,
            options: ["State Board", "ICSE", "NCERT", "International"],
            answer: 2,
          },
          {
            q: `How should you study ${sub} effectively?`,
            options: [
              "Only read notes",
              "Watch video + read + practice",
              "Just give the quiz",
              "Skip it",
            ],
            answer: 1,
          },
        ],
      })),
    }));
    classData[key] = {
      name: classNames[idx],
      fullName: classNames[idx],
      category: classCategories[idx],
      color: classColors[idx],
      icon: classIcons[idx],
      chapters: chaptersList.length,
      lessons: chaptersList.reduce((a, c) => a + c.subchapters.length, 0),
      subjects: subjectsMap[key] || ["English", "Mathematics", "Science"],
      chaptersList: chaptersList,
    };
  }
});

// Blog Data
const blogPosts = [
  {
    id: "blog-1",
    title: "10 Tips to Make Learning Fun for LKG & UKG Children",
    excerpt:
      "Discover creative ways to keep your preschooler engaged and excited about learning with these proven strategies.",
    tag: "Parenting Tips",
    tagColor: "rgba(99,102,241,0.2)",
    tagTextColor: "#a5b4fc",
    author: "Sneha Patel",
    date: "Jan 10, 2025",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/kidlearn-blog1/600/400.jpg",
    content: `<p>Getting young children excited about learning is one of the biggest challenges parents face. At the LKG and UKG level, children have incredibly short attention spans and learn best through play and exploration.</p>
        <h2>1. Use Games and Puzzles</h2>
        <p>Turn learning into a game. Use alphabet puzzles, number matching games, and shape sorting activities. Children learn faster when they're having fun and don't realize they're "studying."</p>
        <h2>2. Create a Learning Corner</h2>
        <p>Designate a small space in your home as the "learning corner." Fill it with colorful charts, books, and learning materials. A dedicated space signals to the child that it's time to learn.</p>
        <h2>3. Use Real-Life Examples</h2>
        <p>Point out letters on signboards, count fruits at the grocery store, identify shapes in buildings. Connecting learning to the real world makes it meaningful.</p>
        <h2>4. Keep Sessions Short</h2>
        <p>Limit formal learning to 15-20 minutes per session. Young children tire quickly. Multiple short sessions are more effective than one long session.</p>
        <h2>5. Sing and Dance</h2>
        <p>Use nursery rhymes and action songs to teach concepts. "ABC" song, "Five Little Ducks," and "Head Shoulders Knees and Toes" are classics for a reason.</p>
        <h2>6. Reward Effort, Not Just Results</h2>
        <p>Praise your child for trying, even if they make mistakes. This builds confidence and a positive attitude toward learning.</p>
        <h2>7. Use Technology Wisely</h2>
        <p>Educational apps and videos can supplement learning, but limit screen time. Co-view and discuss what your child watches.</p>
        <h2>8. Storytelling</h2>
        <p>Read stories every day. Ask questions about the story. Storytelling builds vocabulary, comprehension, and imagination.</p>
        <h2>9. Art and Craft</h2>
        <p>Let children draw, paint, and create. Fine motor skills developed through art directly support writing skills.</p>
        <h2>10. Be Patient</h2>
        <p>Every child learns at their own pace. Don't compare with others. Celebrate small milestones and keep the learning environment stress-free.</p>`,
  },
  {
    id: "blog-2",
    title: "How to Help Your Child with Mathematics: A Guide for Parents",
    excerpt:
      "Math anxiety often starts early. Here's how you can build your child's confidence in numbers from Class 1 to 5.",
    tag: "Mathematics",
    tagColor: "rgba(16,185,129,0.2)",
    tagTextColor: "#6ee7b7",
    author: "Dr. Ramesh Kumar",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    image: "https://picsum.photos/seed/kidlearn-blog2/600/400.jpg",
    content: `<p>Mathematics is often perceived as a difficult subject, but this perception usually starts early. As a parent, you play a crucial role in shaping your child's attitude toward math.</p>
        <h2>Start Early with Number Sense</h2>
        <p>Before your child starts formal math, help them develop "number sense" — an intuitive understanding of numbers. Count objects, compare quantities ("more" and "less"), and talk about numbers in everyday contexts.</p>
        <h2>Make Math Part of Daily Life</h2>
        <p>Cooking together teaches measurement. Shopping teaches money math. Traveling teaches distance and time. When math is woven into daily activities, it loses its abstract, intimidating nature.</p>
        <h2>Use Manipulatives</h2>
        <p>Physical objects like blocks, beads, coins, and counting rods help children understand abstract concepts concretely. Let them touch, move, and group objects to see how numbers work.</p>
        <h2>Focus on Understanding, Not Speed</h2>
        <p>Encourage your child to explain HOW they arrived at an answer, not just what the answer is. Understanding the process is more valuable than being fast.</p>
        <h2>Play Math Games</h2>
        <p>Board games like Snakes & Ladders, card games, dice games, and math apps make practice enjoyable. Games provide repetitive practice without feeling repetitive.</p>
        <h2>Address Mistakes Positively</h2>
        <p>When your child makes a mistake, don't react with frustration. Say "Let's look at this together" instead of "That's wrong." Mistakes are learning opportunities.</p>
        <h2>Don't Pass On Your Math Anxiety</h2>
        <p>If you struggled with math, be careful not to say things like "I was never good at math" or "Math is hard." Children internalize these beliefs easily.</p>`,
  },
  {
    id: "blog-3",
    title: "The Importance of Reading Habits in Primary School Children",
    excerpt:
      "Why reading for pleasure is the single most important skill for academic success across all subjects.",
    tag: "Reading",
    tagColor: "rgba(217,70,239,0.2)",
    tagTextColor: "#e879f9",
    author: "Meera Joshi",
    date: "Dec 28, 2024",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/kidlearn-blog3/600/400.jpg",
    content: `<p>Research consistently shows that children who read for pleasure perform better across ALL subjects — not just language. Reading builds vocabulary, improves concentration, enhances empathy, and develops critical thinking.</p>
        <h2>When Should You Start?</h2>
        <p>It's never too early. Even infants benefit from being read to. By the time a child enters Class 1, they should have a regular reading routine established.</p>
        <h2>How to Build the Habit</h2>
        <ul><li>Set a fixed "reading time" every day (even 15 minutes works)</li><li>Let your child choose what to read</li><li>Keep books accessible — in the living room, bedroom, even the car</li><li>Read together — take turns reading paragraphs aloud</li><li>Discuss what you've read — ask "What did you like?" and "What do you think happens next?"</li></ul>
        <h2>What Should They Read?</h2>
        <p>Anything that interests them! Comics, magazines, storybooks, non-fiction about animals or space — the genre matters less than the act of reading itself.</p>
        <h2>The Digital Dilemma</h2>
        <p>While digital reading is fine, physical books offer advantages: no notifications, better focus, and a tactile experience that aids memory. Try to maintain a mix.</p>`,
  },
  {
    id: "blog-4",
    title: "Screen Time for Kids: How Much is Too Much?",
    excerpt:
      "A balanced approach to managing your child's screen time while ensuring they benefit from educational technology.",
    tag: "Technology",
    tagColor: "rgba(245,158,11,0.2)",
    tagTextColor: "#fcd34d",
    author: "Sneha Patel",
    date: "Dec 20, 2024",
    readTime: "5 min read",
    image: "https://picsum.photos/seed/kidlearn-blog4/600/400.jpg",
    content: `<p>In today's digital world, completely eliminating screen time is neither practical nor desirable. The key is finding the right balance.</p>
        <h2>Recommended Limits</h2>
        <p>The AAP (American Academy of Pediatrics) recommends: No screens for children under 18 months (except video calls), 1 hour/day for ages 2-5, and consistent limits for ages 6 and above.</p>
        <h2>Quality Matters More Than Quantity</h2>
        <p>30 minutes of an educational video is better than 30 minutes of mindless scrolling. Curate your child's digital content actively.</p>
        <h2>Co-Viewing is Powerful</h2>
        <p>Watch with your child. Discuss what they see. Ask questions. This transforms passive consumption into active learning.</p>
        <h2>Create Screen-Free Zones</h2>
        <p>Keep mealtimes, bedrooms, and the hour before bedtime screen-free. These boundaries help children develop healthy habits.</p>
        <h2>Model Good Behavior</h2>
        <p>Children imitate parents. If you're always on your phone, they'll want to be too. Put your phone away during family time.</p>`,
  },
  {
    id: "blog-5",
    title: "Preparing for Class 10 Board Exams: A Complete Strategy",
    excerpt:
      "A month-by-month study plan, subject-wise tips, and stress management techniques for board exam success.",
    tag: "Exam Tips",
    tagColor: "rgba(239,68,68,0.2)",
    tagTextColor: "#fca5a5",
    author: "Dr. Ramesh Kumar",
    date: "Dec 15, 2024",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/kidlearn-blog5/600/400.jpg",
    content: `<p>Class 10 board exams are a significant milestone in a student's academic journey. With the right strategy, they become manageable and even enjoyable.</p>
        <h2>6 Months Before: Foundation Phase</h2>
        <p>Complete the entire syllabus. Don't leave anything for later. Make notes for every chapter. Clarify doubts immediately — don't let them pile up.</p>
        <h2>3 Months Before: Revision Phase</h2>
        <p>Start revising. Solve NCERT exemplar problems. Create formula sheets for Math and Science. Practice writing answers for Social Science.</p>
        <h2>1 Month Before: Practice Phase</h2>
        <p>Solve previous year papers under timed conditions. Identify weak areas and focus on them. Take full-length mock tests every weekend.</p>
        <h2>1 Week Before: Final Touch</h2>
        <p>Don't start anything new. Revise from your notes and formula sheets. Get adequate sleep (7-8 hours). Stay hydrated and eat well.</p>
        <h2>Subject-Wise Tips</h2>
        <ul><li><strong>Math</strong>: Practice daily. Write all steps. Don't skip any chapter.</li><li><strong>Science</strong>: Focus on concepts and diagrams. Practice numerical problems in Physics.</li><li><strong>English</strong>: Read the chapters thoroughly. Practice writing formats. Work on grammar daily.</li><li><strong>Social Science</strong>: Make timeline charts for History. Practice map work for Geography.</li><li><strong>Hindi</strong>: Focus on grammar rules. Practice letter and essay writing formats.</li></ul>
        <h2>Managing Stress</h2>
        <p>Exercise for 30 minutes daily. Talk to family and friends. Take breaks every 45 minutes. Remember — boards are important but not the end of the world. Do your best, that's enough.</p>`,
  },
  {
    id: "blog-6",
    title: "Understanding NCERT vs State Board: Which is Better?",
    excerpt:
      "An objective comparison to help parents make informed decisions about their child's educational board.",
    tag: "Education",
    tagColor: "rgba(59,130,246,0.2)",
    tagTextColor: "#93c5fd",
    author: "Arun Krishnan",
    date: "Dec 8, 2024",
    readTime: "8 min read",
    image: "https://picsum.photos/seed/kidlearn-blog6/600/400.jpg",
    content: `<p>One of the most common dilemmas for Indian parents is choosing between NCERT (CBSE) and State Board curricula. Let's break it down objectively.</p>
        <h2>NCERT/CBSE</h2>
        <ul><li>Nationally standardized curriculum</li><li>Strong foundation for competitive exams (JEE, NEET, UPSC)</li><li>Emphasis on conceptual understanding over rote learning</li><li>Better mobility — easier transfer between schools across India</li><li>English medium emphasis in most schools</li></ul>
        <h2>State Board</h2>
        <ul><li>Curriculum tailored to state's culture, history, and context</li><li>Regional language medium available</li><li>May have lighter syllabus in some subjects</li><li>Better for state-level government job preparation</li><li>More affordable school options</li></ul>
        <h2>Our Recommendation</h2>
        <p>For most parents, NCERT/CBSE offers better long-term advantages, especially if you might relocate or if your child aspires to competitive exams. However, the school's quality matters more than the board. A good State Board school is better than a poor CBSE school.</p>`,
  },
];

// FAQ Data
const faqData = [
  {
    q: "What classes does KidLearn Pro cover?",
    a: "We cover all classes from LKG (Lower Kindergarten) to Class 10. Each class has chapter-wise content including video lessons, text explanations, downloadable PDFs, and interactive quizzes.",
  },
  {
    q: "Is the content aligned with NCERT?",
    a: "Yes! All our content for Class 1 to Class 10 is aligned with NCERT guidelines and syllabus. For LKG and UKG, we follow a play-based learning approach recommended by NEP 2020.",
  },
  {
    q: "How much does KidLearn Pro cost?",
    a: "We offer three plans: Starter (Free) for LKG & UKG basic content, Pro (₹499/month) for Classes 1-5 with full access, and Premium (₹899/month) for ALL classes LKG-10 with parent dashboard. All paid plans include a 7-day free trial.",
  },
  {
    q: "Can I download videos for offline viewing?",
    a: "Currently, videos are available for streaming only through our platform. However, all PDF study materials, worksheets, and notes can be downloaded for offline use.",
  },
  {
    q: "How do quizzes work?",
    a: "Each sub-chapter has an interactive quiz with 5 multiple-choice questions. Your child gets instant feedback on each answer, and the final score is shown at the end. Quizzes can be retaken any number of times.",
  },
  {
    q: "Is there a parent dashboard?",
    a: "Yes! Our Premium plan includes a parent dashboard where you can track your child's progress, see quiz scores, time spent on each lesson, and areas where they need improvement.",
  },
  {
    q: "Can I switch between plans?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the change takes effect at the next billing cycle.",
  },
  {
    q: "What devices are supported?",
    a: "KidLearn Pro works on any device with a modern web browser — laptops, desktops, tablets, and smartphones. We recommend a screen size of at least 7 inches for the best learning experience.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 7-day money-back guarantee on all new subscriptions. If you're not satisfied, you can request a full refund within 7 days of purchase. See our Refund Policy for details.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us through: WhatsApp ( fastest response), Email at support@FusionZone.com, Phone at +91 98765 43210 (Mon-Sat, 9 AM - 6 PM), or the Contact form on our website.",
  },
  {
    q: "Is my child's data safe?",
    a: "We take data privacy extremely seriously, especially since we work with children. We comply with all applicable data protection laws. Read our Privacy Policy for complete details on how we collect, use, and protect your data.",
  },
  {
    q: "Can multiple children use one account?",
    a: "Each account is designed for one student. However, with our Premium plan, you can add up to 3 child profiles under one parent account, each with their own progress tracking.",
  },
];

// Careers Data
const careersData = [
  {
    title: "Primary School Teacher - Mathematics",
    location: "Noida / Remote",
    type: "Full-time",
    tags: ["Teaching", "Mathematics", "Class 1-5"],
  },
  {
    title: "Content Writer - Educational Content",
    location: "Remote",
    type: "Full-time",
    tags: ["Content", "English", "NCERT"],
  },
  {
    title: "Video Animator - 2D/3D",
    location: "Noida",
    type: "Full-time",
    tags: ["Animation", "Design", "Creative"],
  },
  {
    title: "Flutter Developer - Mobile App",
    location: "Noida / Hybrid",
    type: "Full-time",
    tags: ["Development", "Flutter", "Mobile"],
  },
  {
    title: "Social Media Manager",
    location: "Remote",
    type: "Part-time",
    tags: ["Marketing", "Social Media", "Content"],
  },
  {
    title: "Hindi Subject Matter Expert",
    location: "Remote",
    type: "Contract",
    tags: ["Teaching", "Hindi", "Class 6-10"],
  },
  {
    title: "Customer Support Executive",
    location: "Noida",
    type: "Full-time",
    tags: ["Support", "Communication", "Student"],
  },
  {
    title: "QA Tester - EdTech Platform",
    location: "Noida",
    type: "Full-time",
    tags: ["Testing", "QA", "Technology"],
  },
];

// ==================== SPA ROUTER ====================

let currentPage = "home";
let currentLMSClass = null;
let currentChapterIdx = 0;
let currentSubchapterIdx = 0;
let quizStates = {};

function navigateTo(page) {
  event && event.preventDefault();
  if (currentPage === page) return;

  // Hide current page
  const currentEl = document.querySelector(".page.active");
  if (currentEl) {
    currentEl.classList.remove("visible");
    setTimeout(() => {
      currentEl.classList.remove("active");
      showPage(page);
    }, 300);
  } else {
    showPage(page);
  }
}

function showPage(page) {
  currentPage = page;
  const pageEl = document.getElementById(`page-${page}`);
  if (!pageEl) return;

  // Update nav active state
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === page) link.classList.add("active");
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  pageEl.classList.add("active");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pageEl.classList.add("visible");
      initPageAnimations(page);
    });
  });

  // Render dynamic content
  if (page === "classes") renderClassesPage();
  if (page === "blog") renderBlogPage();
  if (page === "faq") renderFAQPage();
  if (page === "careers") renderCareersPage();
  if (page === "sitemap") renderSitemapPage();
}

function navigateToLMS(classKey) {
  event && event.preventDefault();
  currentLMSClass = classKey;
  currentChapterIdx = 0;
  currentSubchapterIdx = 0;
  quizStates = {};

  const currentEl = document.querySelector(".page.active");
  if (currentEl) {
    currentEl.classList.remove("visible");
    setTimeout(() => {
      currentEl.classList.remove("active");
      showLMSPage();
    }, 300);
  } else {
    showLMSPage();
  }
}

function showLMSPage() {
  currentPage = "lms";
  const pageEl = document.getElementById("page-lms");
  if (!pageEl || !currentLMSClass) return;

  document
    .querySelectorAll(".nav-link")
    .forEach((link) => link.classList.remove("active"));
  window.scrollTo({ top: 0, behavior: "instant" });

  renderLMSPage();
  pageEl.classList.add("active");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      pageEl.classList.add("visible");
      initPageAnimations("lms");
    });
  });
}

// ==================== RENDER FUNCTIONS ====================

function renderHomeClasses() {
  const grid = document.getElementById("classesGrid");
  if (!grid) return;
  const keys = [
    "lkg",
    "ukg",
    "class1",
    "class2",
    "class3",
    "class4",
    "class5",
    "class6",
  ];
  grid.innerHTML = keys
    .map((key) => {
      const c = classData[key];
      return `
        <a href="#" onclick="navigateToLMS('${key}')" class="class-card" style="--card-accent:${c.color};--card-glow:${c.color}22">
            <div class="class-card-icon" style="background:${c.color}20">${c.icon}</div>
            <div class="class-card-title">${c.name}</div>
            <div class="class-card-subtitle">${c.fullName}</div>
            <div class="class-card-meta">
                <span><iconify-icon icon="lucide:book-open" width="12"></iconify-icon> ${c.chapters} Chapters</span>
                <span><iconify-icon icon="lucide:play-circle" width="12"></iconify-icon> ${c.lessons} Lessons</span>
            </div>
        </a>`;
    })
    .join("");
}

function renderClassesPage() {
  const grid = document.getElementById("allClassesGrid");
  if (!grid) return;
  const allKeys = Object.keys(classData);
  grid.innerHTML = allKeys
    .map((key) => {
      const c = classData[key];
      return `
        <div class="class-card stagger-child" data-category="${c.category}" style="--card-accent:${c.color};--card-glow:${c.color}22" onclick="navigateToLMS('${key}')">
            <div class="class-card-icon" style="background:${c.color}20">${c.icon}</div>
            <div class="class-card-title">${c.name}</div>
            <div class="class-card-subtitle">${c.fullName}</div>
            <div class="class-card-meta flex flex-wrap gap-2">
                <span><iconify-icon icon="lucide:book-open" width="12"></iconify-icon> ${c.chapters} Ch</span>
                <span><iconify-icon icon="lucide:play-circle" width="12"></iconify-icon> ${c.lessons} Lessons</span>
            </div>
            <div class="flex flex-wrap gap-1.5 mt-3">
                ${c.subjects
                  .slice(0, 3)
                  .map(
                    (s) =>
                      `<span class="career-tag" style="font-size:0.65rem">${s}</span>`,
                  )
                  .join("")}
            </div>
        </div>`;
    })
    .join("");

  // Add stagger class after render
  grid.classList.add("stagger-children");
  setTimeout(() => grid.classList.add("visible"), 100);

  // Filter functionality
  document.querySelectorAll(".class-filter").forEach((btn) => {
    btn.onclick = () => {
      document
        .querySelectorAll(".class-filter")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      grid.querySelectorAll(".class-card").forEach((card) => {
        if (filter === "all" || card.dataset.category === filter) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    };
  });
}

function renderLMSPage() {
  const data = classData[currentLMSClass];
  if (!data) return;

  // Header
  document.getElementById("lmsTitle").textContent = data.name;
  document.getElementById("lmsSubtitle").textContent =
    `${data.fullName} • ${data.chapters} Chapters • ${data.lessons} Lessons • ${data.subjects.join(", ")}`;
  document.getElementById("lmsProgress").textContent =
    `${Math.floor(Math.random() * 30)}% Complete`;

  // Chapters Sidebar
  const chaptersEl = document.getElementById("lmsChapters");
  chaptersEl.innerHTML = data.chaptersList
    .map((ch, chIdx) => {
      const isActive = chIdx === currentChapterIdx;
      return `
        <div>
            <div class="lms-chapter-item ${isActive ? "active" : ""}" onclick="selectChapter(${chIdx})">
                <div class="lms-chapter-icon" style="background:${isActive ? data.color + "30" : "rgba(255,255,255,0.05)"};color:${isActive ? data.color : "var(--text-muted)"}">
                    ${ch.icon}
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium truncate">${ch.title}</p>
                    <p class="text-xs text-zinc-500">${ch.subchapters.length} lessons</p>
                </div>
                <iconify-icon icon="lucide:chevron-down" width="14" class="text-zinc-600 transition-transform ${isActive ? "rotate-180" : ""}"></iconify-icon>
            </div>
            ${
              isActive
                ? ch.subchapters
                    .map(
                      (sub, subIdx) => `
                <div class="lms-subchapter-item ${subIdx === currentSubchapterIdx ? "active" : ""}" onclick="selectSubchapter(${chIdx}, ${subIdx})">
                    <iconify-icon icon="${subIdx === currentSubchapterIdx ? "lucide:play-circle" : "lucide:circle"}" width="14" class="${subIdx === currentSubchapterIdx ? "text-fuchsia-400" : "text-zinc-600"}"></iconify-icon>
                    <span class="truncate">${sub.title}</span>
                </div>
            `,
                    )
                    .join("")
                : ""
            }
        </div>`;
    })
    .join("");

  // Main Content
  renderLMSContent();
}

function renderLMSContent() {
  const data = classData[currentLMSClass];
  const chapter = data.chaptersList[currentChapterIdx];
  const subchapter = chapter.subchapters[currentSubchapterIdx];
  const contentEl = document.getElementById("lmsContent");

  contentEl.innerHTML = `
        <!-- Video Section -->
        <div class="lms-content-card" style="padding:16px;">
            <div class="lms-video-container">
                <iframe src="https://www.youtube.com/embed/${subchapter.videoId}" title="${subchapter.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
            </div>
        </div>

        <!-- Content Tabs -->
        <div class="lms-content-card">
            <div class="flex items-center gap-1 mb-6 flex-wrap">
                <button class="lms-tab active" onclick="switchLMSTab(this, 'content-tab')">
                    <iconify-icon icon="lucide:file-text" width="14"></iconify-icon> Lesson Content
                </button>
                <button class="lms-tab" onclick="switchLMSTab(this, 'pdf-tab')">
                    <iconify-icon icon="lucide:download" width="14"></iconify-icon> Study Material
                </button>
                <button class="lms-tab" onclick="switchLMSTab(this, 'quiz-tab')">
                    <iconify-icon icon="lucide:brain" width="14"></iconify-icon> Quiz
                </button>
            </div>

            <!-- Content Tab -->
            <div id="content-tab" class="lms-tab-content active">
                <h2><iconify-icon icon="lucide:book-open" width="20" class="text-indigo-400"></iconify-icon> ${subchapter.title}</h2>
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="career-tag">${data.name}</span>
                    <span class="career-tag">${chapter.title}</span>
                    <span class="career-tag">${subchapter.hasPDF ? "📄 PDF Available" : "📄 No PDF"}</span>
                    <span class="career-tag">${subchapter.hasQuiz ? "🧪 Quiz Available" : ""}</span>
                </div>
                ${subchapter.content}
            </div>

            <!-- PDF Tab -->
            <div id="pdf-tab" class="lms-tab-content" style="display:none">
                <h2><iconify-icon icon="lucide:file-down" width="20" class="text-fuchsia-400"></iconify-icon> Study Materials</h2>
                ${
                  subchapter.hasPDF
                    ? `
                <div class="space-y-4 mt-4">
                    <div class="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 flex-wrap">
                        <div class="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="lucide:file-text" width="20" class="text-red-400"></iconify-icon>
                        </div>
                        <div class="flex-1 min-w-[200px]">
                            <p class="text-sm font-medium">${subchapter.title} - Notes</p>
                            <p class="text-xs text-zinc-500">PDF • 2.4 MB</p>
                        </div>
                        <button class="pdf-download-btn" onclick="showToast('PDF download started!', 'lucide:download')">
                            <iconify-icon icon="lucide:download" width="16"></iconify-icon>
                            Download PDF
                        </button>
                    </div>
                    <div class="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 flex-wrap">
                        <div class="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="lucide:clipboard-list" width="20" class="text-amber-400"></iconify-icon>
                        </div>
                        <div class="flex-1 min-w-[200px]">
                            <p class="text-sm font-medium">${subchapter.title} - Worksheet</p>
                            <p class="text-xs text-zinc-500">PDF • 1.8 MB</p>
                        </div>
                        <button class="pdf-download-btn" onclick="showToast('Worksheet download started!', 'lucide:download')">
                            <iconify-icon icon="lucide:download" width="16"></iconify-icon>
                            Download PDF
                        </button>
                    </div>
                    <div class="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 flex-wrap">
                        <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                            <iconify-icon icon="lucide:check-square" width="20" class="text-green-400"></iconify-icon>
                        </div>
                        <div class="flex-1 min-w-[200px]">
                            <p class="text-sm font-medium">${subchapter.title} - Answer Key</p>
                            <p class="text-xs text-zinc-500">PDF • 0.9 MB</p>
                        </div>
                        <button class="pdf-download-btn" onclick="showToast('Answer key download started!', 'lucide:download')">
                            <iconify-icon icon="lucide:download" width="16"></iconify-icon>
                            Download PDF
                        </button>
                    </div>
                </div>
                `
                    : '<p class="text-zinc-400 text-sm">No downloadable materials available for this lesson yet.</p>'
                }
            </div>

            <!-- Quiz Tab -->
            <div id="quiz-tab" class="lms-tab-content" style="display:none">
                ${subchapter.hasQuiz ? renderQuiz(subchapter) : '<p class="text-zinc-400 text-sm">No quiz available for this lesson yet.</p>'}
            </div>
        </div>

        <!-- Navigation -->
        <div class="flex items-center justify-between flex-wrap gap-4">
            <button onclick="navigateSubchapter(-1)" class="quiz-btn quiz-btn-secondary" id="prevSubBtn" ${currentSubchapterIdx === 0 && currentChapterIdx === 0 ? 'disabled style="opacity:0.3;pointer-events:none"' : ""}>
                <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Previous Lesson
            </button>
            <span class="text-xs text-zinc-500">
                ${chapter.subchapters.indexOf(subchapter) + 1} of ${chapter.subchapters.length} in ${chapter.title}
            </span>
            <button onclick="navigateSubchapter(1)" class="quiz-btn quiz-btn-primary" id="nextSubBtn" ${isLastSubchapter() ? 'disabled style="opacity:0.3;pointer-events:none"' : ""}>
                Next Lesson <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
            </button>
        </div>
    `;

  // Init quiz if needed
  if (subchapter.hasQuiz) {
    initQuiz(subchapter);
  }
}

function renderQuiz(subchapter) {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  if (!quizStates[quizKey]) {
    quizStates[quizKey] = {
      current: 0,
      answers: {},
      submitted: [],
      finished: false,
    };
  }
  const state = quizStates[quizKey];
  const letters = ["A", "B", "C", "D"];

  if (state.finished) {
    const score = state.submitted.filter(
      (s, i) => s === subchapter.quiz[i].answer,
    ).length;
    const total = subchapter.quiz.length;
    const pct = Math.round((score / total) * 100);
    const isGreat = pct >= 80;
    return `
        <div class="quiz-result">
            <div class="quiz-result-icon" style="background:${isGreat ? "rgba(16,185,129,0.15)" : "rgba(245,158,11,0.15)"}">
                ${isGreat ? "🎉" : "💪"}
            </div>
            <p class="quiz-result-score" style="background:linear-gradient(to right,${isGreat ? "#10b981,#06b6d4" : "#f59e0b,#f97316"});-webkit-background-clip:text;-webkit-text-fill-color:transparent">${score}/${total}</p>
            <p class="text-zinc-400 text-sm mb-6">${isGreat ? "Excellent work! Keep it up!" : "Good try! Review the lesson and try again."}</p>
            <div class="flex justify-center gap-3">
                <button class="quiz-btn quiz-btn-secondary" onclick="retryQuiz()">
                    <iconify-icon icon="lucide:rotate-ccw" width="16"></iconify-icon> Retry Quiz
                </button>
                <button class="quiz-btn quiz-btn-primary" onclick="switchLMSTab(document.querySelectorAll('.lms-tab')[0],'content-tab')">
                    <iconify-icon icon="lucide:book-open" width="16"></iconify-icon> Review Lesson
                </button>
            </div>
        </div>`;
  }

  const q = subchapter.quiz[state.current];
  const selected = state.answers[state.current];
  const isSubmitted = state.submitted[state.current] !== undefined;

  return `
    <div class="quiz-header">
        <span class="text-sm text-zinc-400">Question ${state.current + 1} of ${subchapter.quiz.length}</span>
        <div class="flex items-center gap-2">
            <div class="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 rounded-full transition-all duration-500" style="width:${((state.current + 1) / subchapter.quiz.length) * 100}%"></div>
            </div>
        </div>
    </div>
    <p class="quiz-question">${q.q}</p>
    <div class="space-y-2">
        ${q.options
          .map((opt, i) => {
            let cls = "";
            if (isSubmitted) {
              if (i === q.answer) cls = "correct";
              else if (i === selected && i !== q.answer) cls = "incorrect";
            } else if (i === selected) {
              cls = "selected";
            }
            return `
            <div class="quiz-option ${cls}" onclick="${isSubmitted ? "" : `selectQuizOption(${state.current}, ${i})`}">
                <span class="quiz-option-letter">${letters[i]}</span>
                <span>${opt}</span>
                ${isSubmitted && i === q.answer ? '<iconify-icon icon="lucide:check" width="16" class="ml-auto text-green-400"></iconify-icon>' : ""}
                ${isSubmitted && i === selected && i !== q.answer ? '<iconify-icon icon="lucide:x" width="16" class="ml-auto text-red-400"></iconify-icon>' : ""}
            </div>`;
          })
          .join("")}
    </div>
    <div class="quiz-nav">
        <button class="quiz-btn quiz-btn-secondary" onclick="prevQuizQuestion()" ${state.current === 0 ? 'disabled style="opacity:0.4"' : ""}>
            <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> Previous
        </button>
        ${
          !isSubmitted
            ? `
            <button class="quiz-btn quiz-btn-primary" onclick="submitQuizAnswer()" ${selected === undefined ? "disabled" : ""}>
                Check Answer
            </button>
        `
            : state.current < subchapter.quiz.length - 1
              ? `
            <button class="quiz-btn quiz-btn-primary" onclick="nextQuizQuestion()">
                Next Question <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
            </button>
        `
              : `
            <button class="quiz-btn quiz-btn-primary" onclick="finishQuiz()">
                See Results <iconify-icon icon="lucide:trophy" width="16"></iconify-icon>
            </button>
        `
        }
    </div>`;
}

function initQuiz(subchapter) {
  // Quiz state is managed by renderQuiz
}

function selectQuizQuestion(idx) {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey].current = idx;
  renderLMSContent();
}

function selectQuizOption(qIdx, optIdx) {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey].answers[qIdx] = optIdx;
  renderLMSContent();
}

function submitQuizAnswer() {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  const state = quizStates[quizKey];
  const data = classData[currentLMSClass];
  const q =
    data.chaptersList[currentChapterIdx].subchapters[currentSubchapterIdx].quiz[
      state.current
    ];
  state.submitted[state.current] = state.answers[state.current];
  renderLMSContent();
  if (state.answers[state.current] === q.answer) {
    showToast("Correct answer! 🎉", "lucide:check-circle");
  } else {
    showToast("Not quite right. Review the correct answer.", "lucide:x-circle");
  }
}

function nextQuizQuestion() {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey].current++;
  renderLMSContent();
}

function prevQuizQuestion() {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey].current--;
  renderLMSContent();
}

function finishQuiz() {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey].finished = true;
  renderLMSContent();
}

function retryQuiz() {
  const quizKey = `${currentLMSClass}-${currentChapterIdx}-${currentSubchapterIdx}`;
  quizStates[quizKey] = {
    current: 0,
    answers: {},
    submitted: [],
    finished: false,
  };
  renderLMSContent();
}

function switchLMSTab(btn, tabId) {
  btn
    .closest(".lms-content-card")
    .querySelectorAll(".lms-tab")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
  btn
    .closest(".lms-content-card")
    .querySelectorAll(".lms-tab-content")
    .forEach((c) => (c.style.display = "none"));
  document.getElementById(tabId).style.display = "block";
}

function selectChapter(idx) {
  currentChapterIdx = idx;
  currentSubchapterIdx = 0;
  renderLMSPage();
  // Re-trigger animations
  setTimeout(initPageAnimations, 50);
}

function selectSubchapter(chIdx, subIdx) {
  currentChapterIdx = chIdx;
  currentSubchapterIdx = subIdx;
  renderLMSPage();
  setTimeout(initPageAnimations, 50);
}

function navigateSubchapter(direction) {
  const data = classData[currentLMSClass];
  const chapter = data.chaptersList[currentChapterIdx];
  let newSub = currentSubchapterIdx + direction;
  let newCh = currentChapterIdx;

  if (newSub >= chapter.subchapters.length) {
    newCh++;
    newSub = 0;
  } else if (newSub < 0) {
    newCh--;
    if (newCh < 0) return;
    newSub = data.chaptersList[newCh].subchapters.length - 1;
  }

  if (newCh >= data.chaptersList.length) return;

  currentChapterIdx = newCh;
  currentSubchapterIdx = newSub;
  renderLMSPage();
  setTimeout(initPageAnimations, 50);
}

function isLastSubchapter() {
  const data = classData[currentLMSClass];
  return (
    currentChapterIdx === data.chaptersList.length - 1 &&
    currentSubchapterIdx ===
      data.chaptersList[currentChapterIdx].subchapters.length - 1
  );
}

function renderBlogPage() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;
  grid.innerHTML = blogPosts
    .map(
      (post) => `
        <div class="blog-card" onclick="openBlogPost('${post.id}')">
            <div class="overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="blog-card-img" loading="lazy">
            </div>
            <div class="blog-card-body">
                <span class="blog-card-tag" style="background:${post.tagColor};color:${post.tagTextColor}">${post.tag}</span>
                <h3 class="blog-card-title">${post.title}</h3>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <div class="blog-card-meta">
                    <span><iconify-icon icon="lucide:user" width="12"></iconify-icon> ${post.author}</span>
                    <span><iconify-icon icon="lucide:calendar" width="12"></iconify-icon> ${post.date}</span>
                    <span><iconify-icon icon="lucide:clock" width="12"></iconify-icon> ${post.readTime}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

function openBlogPost(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return;

  const currentEl = document.querySelector(".page.active");
  if (currentEl) {
    currentEl.classList.remove("visible");
    setTimeout(() => {
      currentEl.classList.remove("active");
      currentPage = "blog-detail";
      const pageEl = document.getElementById("page-blog-detail");

      document.getElementById("blogDetailContent").innerHTML = `
                <div class="fade-in">
                    <img src="${post.image}" alt="${post.title}" class="w-full rounded-2xl mb-8 border border-white/10" loading="lazy">
                    <span class="blog-detail-tag" style="background:${post.tagColor};color:${post.tagTextColor}">${post.tag}</span>
                    <h1 class="blog-detail-title">${post.title}</h1>
                    <div class="blog-detail-meta">
                        <span><iconify-icon icon="lucide:user" width="14"></iconify-icon> ${post.author}</span>
                        <span><iconify-icon icon="lucide:calendar" width="14"></iconify-icon> ${post.date}</span>
                        <span><iconify-icon icon="lucide:clock" width="14"></iconify-icon> ${post.readTime}</span>
                    </div>
                    <div class="blog-detail-content">${post.content}</div>
                    <div class="mt-12 pt-8 border-t border-white/10">
                        <p class="text-sm text-zinc-400 mb-4">Found this article helpful? Share it with other parents!</p>
                        <div class="flex gap-3">
                            <a href="https://wa.me/?text=${encodeURIComponent(post.title + " - KidLearn Pro")}" target="_blank" class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center hover:bg-green-500/30 transition-colors">
                                <iconify-icon icon="lucide:message-circle" width="18" class="text-green-400"></iconify-icon>
                            </a>
                            <button class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center hover:bg-blue-500/30 transition-colors" onclick="showToast('Link copied to clipboard!','lucide:link')">
                                <iconify-icon icon="lucide:link" width="18" class="text-blue-400"></iconify-icon>
                            </button>
                        </div>
                    </div>
                </div>
            `;

      window.scrollTo({ top: 0, behavior: "instant" });
      pageEl.classList.add("active");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          pageEl.classList.add("visible");
          initPageAnimations("blog-detail");
        });
      });
    }, 300);
  }
}

function renderFAQPage() {
  const container = document.getElementById("faqContainer");
  if (!container) return;
  container.innerHTML = faqData
    .map(
      (item, i) => `
        <div class="faq-item" data-faq="${i}">
            <div class="faq-question" onclick="toggleFAQ(${i})">
                <span>${item.q}</span>
                <iconify-icon icon="lucide:plus" width="18"></iconify-icon>
            </div>
            <div class="faq-answer">
                <div class="faq-answer-inner">${item.a}</div>
            </div>
        </div>
    `,
    )
    .join("");
}

function toggleFAQ(idx) {
  const item = document.querySelector(`[data-faq="${idx}"]`);
  if (!item) return;
  const wasOpen = item.classList.contains("open");
  // Close all
  document
    .querySelectorAll(".faq-item")
    .forEach((i) => i.classList.remove("open"));
  // Toggle current
  if (!wasOpen) item.classList.add("open");
}

function renderCareersPage() {
  const container = document.getElementById("careersContainer");
  if (!container) return;
  container.innerHTML = careersData
    .map(
      (job) => `
        <div class="career-card">
            <div>
                <h3 class="text-sm font-medium mb-2">${job.title}</h3>
                <div class="flex items-center gap-3 mb-2 text-xs text-zinc-500">
                    <span class="flex items-center gap-1"><iconify-icon icon="lucide:map-pin" width="12"></iconify-icon> ${job.location}</span>
                    <span class="flex items-center gap-1"><iconify-icon icon="lucide:clock" width="12"></iconify-icon> ${job.type}</span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                    ${job.tags.map((t) => `<span class="career-tag">${t}</span>`).join("")}
                </div>
            </div>
            <button class="career-apply-btn" onclick="showToast('Application form will open soon!','lucide:send')">Apply Now</button>
        </div>
    `,
    )
    .join("");
}

function renderSitemapPage() {
  const container = document.getElementById("sitemapContainer");
  if (!container) return;
  const groups = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", page: "home" },
        { label: "About Us", page: "about" },
        { label: "All Classes", page: "classes" },
        { label: "Blog", page: "blog" },
        { label: "Pricing", page: "pricing" },
        { label: "Contact", page: "contact" },
        { label: "FAQ", page: "faq" },
        { label: "Careers", page: "careers" },
      ],
    },
    {
      title: "Classes",
      links: Object.keys(classData).map((k) => ({
        label: classData[k].name,
        action: `navigateToLMS('${k}')`,
      })),
    },
    {
      title: "Legal Pages",
      links: [
        { label: "Privacy Policy", page: "privacy" },
        { label: "Terms & Conditions", page: "terms" },
        { label: "Refund Policy", page: "refund" },
        { label: "Cookie Policy", page: "cookie" },
      ],
    },
    { title: "Other", links: [{ label: "Sitemap", page: "sitemap" }] },
  ];
  container.innerHTML = groups
    .map(
      (g) => `
        <div class="sitemap-group">
            <h3>${g.title}</h3>
            <ul>${g.links
              .map(
                (l) => `
                <li><a href="#" onclick="${l.action || `navigateTo('${l.page}')`};event.preventDefault()">
                    <iconify-icon icon="lucide:chevron-right"></iconify-icon> ${l.label}
                </a></li>
            `,
              )
              .join("")}</ul>
        </div>
    `,
    )
    .join("");
}

// ==================== UI INTERACTIONS ====================

function toggleMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");
  const isOpen = !menu.classList.contains("-translate-x-full");

  if (isOpen) {
    menu.classList.add("-translate-x-full");
    icon.setAttribute("icon", "lucide:menu");
    document.body.style.overflow = "";
  } else {
    menu.classList.remove("-translate-x-full");
    icon.setAttribute("icon", "lucide:x");
    document.body.style.overflow = "hidden";
  }
}

function closeMobileMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.getElementById("menuIcon");
  menu.classList.add("-translate-x-full");
  icon.setAttribute("icon", "lucide:menu");
  document.body.style.overflow = "";
}

function handleContactForm(e) {
  e.preventDefault();
  const form = document.getElementById("contactForm");
  const success = document.getElementById("contactSuccess");
  form.style.display = "none";
  success.classList.remove("hidden");
  showToast("Message sent successfully!", "lucide:check-circle");
}

function showToast(message, icon) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toastMsg");
  const ic = document.getElementById("toastIcon");
  msg.textContent = message;
  if (icon) ic.setAttribute("icon", icon);
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 4000);
}

// ==================== ANIMATIONS ====================

function initPageAnimations(page) {
  // Fade in elements
  setTimeout(() => {
    document.querySelectorAll(`#page-${page} .fade-in`).forEach((el, i) => {
      setTimeout(() => el.classList.add("visible"), i * 100);
    });
  }, 100);
}

// Scroll-based navbar
function handleScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

// 3D Tilt effect on mouse move
function handleTilt(e) {
  const cards = document.querySelectorAll(
    "[data-tilt]:not(.quiz-container):not(.quiz-option)",
  );
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isHovered =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (isHovered) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.transition = "transform 0.1s ease-out";

      // Set mouse position for radial gradient
      const pctX = (x / rect.width) * 100;
      const pctY = (y / rect.height) * 100;
      card.style.setProperty("--mouse-x", pctX + "%");
      card.style.setProperty("--mouse-y", pctY + "%");
    } else {
      card.style.transform = "";
      card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  });
}

// Feature card mouse tracking
function handleFeatureCardMouse(e) {
  document.querySelectorAll(".feature-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isHovered =
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom;
    if (isHovered) {
      const pctX = ((e.clientX - rect.left) / rect.width) * 100;
      const pctY = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", pctX + "%");
      card.style.setProperty("--mouse-y", pctY + "%");
    }
  });
}

// Intersection Observer for scroll animations
function initScrollObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
  );

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
}

// Hero 3D card mouse tracking
function handleHeroCardMouse(e) {
  const card = document.querySelector(".hero-3d-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -8;
  const rotateY = ((x - centerX) / centerX) * 8;
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.transition = "transform 0.15s ease-out";
}

function handleHeroCardLeave() {
  const card = document.querySelector(".hero-3d-card");
  if (!card) return;
  card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  card.style.transition = "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
}

// LMS Tab styling (injected dynamically)
function injectLMTTabStyles() {
  if (document.getElementById("lms-tab-styles")) return;
  const style = document.createElement("style");
  style.id = "lms-tab-styles";
  style.textContent = `
        .lms-tab {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--text-muted);
            background: transparent;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .lms-tab:hover {
            color: var(--text-secondary);
            background: rgba(255,255,255,0.03);
        }
        .lms-tab.active {
            color: white;
            background: rgba(255,255,255,0.08);
            border-color: var(--border-color);
        }
        .lms-tab-content {
            animation: slideUp 0.4s ease;
        }
    `;
  document.head.appendChild(style);
}

// ==================== INITIALIZATION ====================

function init() {
  // Preloader
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("preloader").classList.add("hidden");
      // Show WhatsApp button after preloader
      setTimeout(() => {
        document.getElementById("whatsappBtn").classList.add("visible");
      }, 500);
    }, 1500);
  });

  // Render home page classes grid
  renderHomeClasses();

  // Inject LMS tab styles
  injectLMTTabStyles();

  // Scroll handler
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // Mouse move handlers
  window.addEventListener("mousemove", handleTilt, { passive: true });
  window.addEventListener("mousemove", handleFeatureCardMouse, {
    passive: true,
  });

  // Hero card
  const heroCard = document.querySelector(".hero-3d-card");
  if (heroCard) {
    heroCard.addEventListener("mousemove", handleHeroCardMouse);
    heroCard.addEventListener("mouseleave", handleHeroCardLeave);
  }

  // Scroll observer
  setTimeout(initScrollObserver, 2000);

  // Initialize home page animations
  setTimeout(() => initPageAnimations("home"), 1800);

  // Keyboard shortcut: Escape to go back
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (currentPage === "lms") navigateTo("classes");
      else if (currentPage === "blog-detail") navigateTo("blog");
      closeMobileMenu();
    }
  });

  // Handle hash changes for direct links
  function handleHash() {
    const hash = window.location.hash.replace("#", "");
    if (hash && hash !== "home" && classData[hash]) {
      navigateToLMS(hash);
    } else if (hash && document.getElementById(`page-${hash}`)) {
      navigateTo(hash);
    }
  }
  window.addEventListener("hashchange", handleHash);
  setTimeout(handleHash, 100);
}

// Run initialization
document.addEventListener("DOMContentLoaded", init);

// Parallax effect on scroll for floating shapes
let ticking = false;
window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        document.querySelectorAll(".shape").forEach((shape, i) => {
          const speed = 0.02 + i * 0.008;
          const direction = i % 2 === 0 ? 1 : -1;
          shape.style.transform = shape.style.transform || "";
          shape.style.marginTop = `${scrollY * speed * direction}px`;
        });
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true },
);

// Service Worker registration for offline capability (basic)
if ("serviceWorker" in navigator) {
  // In production, you'd register a proper SW file
  // navigator.serviceWorker.register('/sw.js');
}
