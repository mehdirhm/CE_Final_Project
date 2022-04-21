import Express from 'express';
import login from './routes/login.js'
import reguser from './routes/reguser.js'
import cors from 'cors';
import mongoose from 'mongoose';
const app = Express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
mongoose.connect('mongodb://localhost/asset_management')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));




app.use(cors(corsOptions));
app.use(Express.json());
app.use('/login', login);
app.use('/reguser',reguser);

const port = process.env.PORT || 3030;
app.listen(port, () => console.log('listening on port 3030'));

