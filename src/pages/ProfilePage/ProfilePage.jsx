import * as foodsAPI from '../../utilities/food-api';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

export default function ProfilePage({user}) {

    console.log(user, "THIS IS THE USER")

const AsyncImage = (props) => {
    const [loadedSrc, setLoadedSrc] = useState(null);
    useEffect(() => {
        setLoadedSrc(null);
        if (props.src) {
            const handleLoad = () => {
                setLoadedSrc(props.src);
            };
            const image = new Image();
            image.addEventListener('load', handleLoad);
            image.src = props.src;
            return () => {
                image.removeEventListener('load', handleLoad);
            };
        }
    }, [props.src]);
    if (loadedSrc === props.src) {
        return (
            <img {...props} />
        );
    }
    return null;
};

  return (
<section className="pt-16 bg-blueGray-50">
<div className="w-full lg:w-4/12 px-4 mx-auto">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
    <div className="px-6">
      <div className="flex flex-wrap justify-center">
        <div className="w-full px-4 flex justify-center">
            {/* <img src={user.photoUrl}/> */}
          <div className="relative">
            <AsyncImage src={user.photoUrl} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
          </div>
        </div>
        <div className="w-full px-4 text-center mt-20">
          <div className="flex justify-center py-4 lg:pt-4 pt-8">
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                22
              </span>
              <span className="text-sm text-blueGray-400">Friends</span>
            </div>
            <div className="mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                10
              </span>
              <span className="text-sm text-blueGray-400">Photos</span>
            </div>
            <div className="lg:mr-4 p-3 text-center">
              <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                89
              </span>
              <span className="text-sm text-blueGray-400">Comments</span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
          {user.name}
        </h3>
        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
          <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
         {user.city}
        </div>
        <div className="mb-2 text-blueGray-600 mt-10">
          <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          Business: {user.businessName}
          <br />
          Business Type: {user.businessType}
        </div>
        <div className="mb-2 text-blueGray-600">
          <i className="fas fa-type mr-2 text-lg text-blueGray-400"></i>
          User Type: {user.userType}
        </div>
      </div>
      <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-9/12 px-4">
            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
              I run a italian restaurant and always have left over food to give to people.
            </p>
            {/* <a href="javascript:void(0);" className="font-normal text-pink-500">
              Show more
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
      </div>
    </div>
  </div>
</footer>
</section>
  );
}