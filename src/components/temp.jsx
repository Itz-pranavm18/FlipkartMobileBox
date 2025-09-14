import './temp.css'

function Mobile({ image, name, f1, f2, f3, f4, f5, price, old }) {
    return (
        <div id="main">
            <div id="child1">
                <img src={image} alt={name} />
            </div>

            <div id="child2">
                <h2>{name}</h2>
                <ul>
                    <li>{f1}</li>
                    <li>{f2}</li>
                    <li>{f3}</li>
                    <li>{f4}</li>
                    <li>{f5}</li>
                </ul>
            </div>

            <div id="child3">
                <h1>{price}</h1>
                <del>{old}</del>  {/* ✅ Replaced strike with del */}
            </div>
        </div>
    );
}

export default Mobile;