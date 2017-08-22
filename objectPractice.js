// Part I
var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]
for (var studentname in students){
    console.log(students[studentname].first_name + " " + students[studentname].last_name);
}
// Part II
var users = {
    'Students': [ 
        {first_name: 'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
for (var usertype in users){
    console.log(usertype);
    for (var i = 0; i < users[usertype].length; i++){
        console.log((i+1) + " - " + users[usertype][i].first_name + " " + users[usertype][i].last_name + " - " + (users[usertype][i].first_name.length + users[usertype][i].last_name.length));
    }
}