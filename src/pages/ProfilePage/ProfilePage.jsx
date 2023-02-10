import * as foodsAPI from '../../utilities/food-api';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function ProfilePage({user}) {


  return (


<div>
<img src={user.photoUrl} style={{width: 50, height: 50, alignContent: 'center', alignItems: 'center'}}></img>

</div>
  );
}