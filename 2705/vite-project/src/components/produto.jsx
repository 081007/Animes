import Styles from './Produto.module.css';

<Produto/>



function Produto (){
    return (
        <div className={Styles.content}>
            <h1>Produtos</h1>
          

        <div className='imgs1'>
        <div className='card' >
        <img className='img' src="https://espadasymas.com/cdn/shop/products/img_336158_33fc481b79d3a38ac8bb10f546aa72c2_1.jpg?v=1706738279"  alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
  
        <div className='card' >
        <img className='img' src="https://cdn-cosmos.bluesoft.com.br/products/4573288999541"  alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className='card' >
        <img className='img' src="https://cdn.listasdepresente.com/products/1979.jpg"  alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>

        <div className='imgs2'>

        <div className='card' >
        <img className='img' src="https://ae01.alicdn.com/kf/H28a0f63821ed48bd9b6f4ba45dc578759.jpg_640x640Q90.jpg_.webp"  alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>

        <div className='card' >
        <img className='img' src="https://cdn.awsli.com.br/2500x2500/1316/1316335/produto/170046454/a2ae920e96.jpg"  alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Produto