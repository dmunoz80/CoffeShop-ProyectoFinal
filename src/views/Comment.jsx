import CommentForm from '../components/CommentForm';
import Navbar from "../components/Navbar"
import FooterNavigation from '../components/FooterNavigation';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const urlBaseServer = "http://localhost:3000"
const token = sessionStorage.getItem("token");

function App() {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/comentarios");
    setPosts([...posts]);
  };

  const agregarPost = async () => {
    const post = { title, comment };
    await axios.post(urlBaseServer + "/comentarios", post, { headers: { Authorization: `Bearer ${token}` }});
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

    return (
        <>
        <Navbar title={"ENVIANOS TUS COMENTARIOS"} />

        <div className='envio-comentario' style={{ backgroundColor: "#cd966c" }}>
            <CommentForm 
                setTitle={setTitle}
                setComment={setComment}
                agregarPost={agregarPost}
            />
        </div>
        <FooterNavigation />

        </>
    );
};

export default App;
