import React from 'react';

const Book = ({ img, title, author }) => {
    //   const clickHandler = (e) => {
    //     console.log(e);
    //     console.log(e.target);
    //   };
    const complexExample = () => {
        console.log(title + " By " + author);
    };
    return (
        <article className="SingleBook">
            <div style={{ padding: "inherit" }}>
                <Image img={img} />
                <Title title={title} />
                <Author author={author} />
                <div className="sub-main">
                    <button className="button-two" onClick={() => complexExample()}>
                        <span>Add To Cart</span>
                    </button>
                </div>
            </div>
        </article>
    );
};

const Image = (img) => {
    return <img className="SingleBookImg" src={img.img} alt="" />;
};

const Title = (title) => {
    return (
        <article>
            <div>
                <h2>{title.title.toUpperCase()}</h2>
            </div>
        </article>
    );
};

const Author = (author) => {
    return (
        <article>
            <div>
                <h4
                    style={{
                        color: "#111",
                        fontSize: "1.1rem",
                        marginTop: "0.25rem",
                        letterSpacing: "3px",
                    }}
                >
                    {author.author.toUpperCase()}
                </h4>
            </div>
        </article>
    );
};

export default Book;
