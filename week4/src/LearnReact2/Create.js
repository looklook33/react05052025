import { useState } from "react"
export default function Create(){
    const [title, setTitle] =useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState("mario");

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog ={title, body, author};
    }
    return (
        <div className="create">
            <h2>
                Add a New Blog
            </h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e)=>setTitle(e.target.value)}>
                </input>
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="option1">option 1</option>
                    <option value="option2">option 2</option>
                </select>
                <button>Add Blog</button>
                <p style={{fontSize:30}}>{title}</p>
                <p style={{fontSize:20}}>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    )
}