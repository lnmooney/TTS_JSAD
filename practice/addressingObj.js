const course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};

// get course name
console.log(course.name);
// get name of second teacher
console.log(course.teachers[1]);
// get name of first student
console.log(course.students[0].name);
// get computer type of katy
console.log(course.students[1].computer.type);
//get preReq equipment object
console.log(course.preReqs.equipment);
//get second OSOption from equipment prereqs ('osx')
console.log(course.preReqs.equipment.OSOptions[1]);
//get string listing the OSOptions separated by 'or' ('linux or osx')
const courseJoining = course.preReqs.equipment.OSOptions;
console.log(courseJoining.join(' or '));
//get array of all the students that are using OSX
const osUsers = [];
	if(course.students.computer.OS === 'OSX'){
		osUsers.push(course.students.name);
	}

// create an object mimicking Gmail
const email = {
    name: 'Gmail',
    mailboxes: [
        'Inbox',
        'Outbox',
        'Trash',
    ],
    contacts: [{
        mostRecent: [
            {
                name: 'Shelly Mooney', email: 'sjmooney@gmail.com'
            },
            {
                name: 'Dabe Mooney', email: 'djmooney@gmail.com'
            },
            {
                name: 'Paige Mooney', email: 'pemooney@gmail.com'
            },
        ],
        favorites: [
            {
                name: 'Erica', email: 'ekmooney@gmail.com'
            }
        ],
        blocked: [
            {
                name: 'Speech Grammar', email: 'idk@SpeechGrammarList.com'
            }
        ],
    }],
};