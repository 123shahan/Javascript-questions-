// in operator
const object = {
    User: 'shahan',
    password: '1234',
    course: 'javascript',
};
// in operator check weather data is within object or in an array. and in object IN operator works only keys and property of the object.if any key or property is present in the object in operator gives true otherwise it gives false
if('password' in object ){
    console.log("found");
}
else{
    console.log("not found");
}

//output is found
