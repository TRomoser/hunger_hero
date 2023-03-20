import HeroPostForm from "../../components/HeroPostForm/HeroPostForm";
import { useNavigate } from 'react-router-dom';
import './HeroPostPage.css'

export default function HeroPostPage(props) {
  const { user } = props
  const navigate = useNavigate()

  return (
    <div className="post-form-container">
      <HeroPostForm navigate={navigate} user={user}/>
    </div>
  );
}