//Node server that handels socket.io connections
const io=require('socket.io')(8000)
const users = {};
io.on('connection',socket=>{
socket.on('new-user-joined', namee=>{
    console.log("new user",namee);
    users[socket.id]=namee;
    socket.broadcast.emit('user-joined', namee);
    
   });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message, namee:users[socket.id]})
    });
})