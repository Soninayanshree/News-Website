import './home.css';
import axios from 'axios';
import { useState } from 'react';
export default function Home() {
    const [data, setData] = useState([]);
    const [heading,setheading]=useState([]);
    const categoryHeadingG = () => {
        axios.get ('https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('General')
            });
    }
    const categoryHeadingSp = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('Sports')
            });
    }
    const categoryHeadingS = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('Science')

            });
    }
    const categoryHeadingE = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('Entertainment')
            });
    }
    const categoryHeadingT = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('Technology')
            });
    }
    const categoryHeadingB = () => {
        // alert();
        axios.get ('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('Business')
            });
    }
    const categoryHeadingH = () => {
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles)
                setheading('Health')
            });
    }

    const categoryHeadingI = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=in&apiKey=8251746520544ea8ac8a2a5abde65bd5'
        )
            .then((res) => {
                setData(res.data.articles);
                setheading('INDIA')
            });
    }
    const categoryHeadingU = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=us&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('USA')
            });
    }
    const categoryHeadingC = () => {
        // alert();
        axios.get  ('https://newsapi.org/v2/top-headlines?country=ca&apiKey=8251746520544ea8ac8a2a5abde65bd5')
            .then((res) => {
                setData(res.data.articles);
                setheading('CANADA')
            });
    }
    const news = data.map((value, index) => {
        return (
            <div key={index} className="card">
               <div className='cardbox'>
                <div><img src={value.urlToImage} alt="..." /></div>
                <div className='card-body'>
                    <h6 className='title'>{value.title}</h6>
                    <h><i>{value.author}{value.publishedAt}</i></h>
                    <p className='description'>{value.description}</p>
                    <a href={value.url} className="btn">READ MORE</a>
                </div>
                </div>
            </div>
        )
    })
    

    return (
        <div>
            <div className="home">
                <div className="head1">
                    <hr />
                    <h2 className='ctgy'>Category</h2>
                    <button className='button' onClick={categoryHeadingG}>General</button>
                    <button className='button' onClick={categoryHeadingSp}>Sports</button>
                    <button className='button'onClick={categoryHeadingS}>Science</button>
                    <button className='button'onClick={categoryHeadingE}>Entertainment</button>
                    <button className='button'onClick={categoryHeadingT}>Technology</button>
                    <button className='button'onClick={categoryHeadingB}>Business</button>
                    <button className='button'onClick={categoryHeadingH}>Health</button>
                    <hr />
                    <h2 className='ctgy'>Country</h2>
                    <button className='button'onClick={categoryHeadingI}>INDIA</button>
                    <button className='button'onClick={categoryHeadingU}>USA</button>
                    <button className='button'onClick={categoryHeadingC}>CANADA</button>
                </div>
                <div className="centrebox">
                    <div><h2 className='heading'><i>{heading}</i></h2></div>     
                    <div className='news'>{news}</div>
                </div>
                
            </div>
        </div>
    )
}