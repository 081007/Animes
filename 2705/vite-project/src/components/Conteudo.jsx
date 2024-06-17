import Styles from './Conteudo.module.css';

export function Conteudo() {

    return (

        <reactFragment>
    <div className={Styles.content}>
    
       <h1 className={Styles.titleconteudo}>Totoro</h1>
       <p >A trama descreve a vida de uma família, tendo como protagonistas duas irmãs, Satsuki e Mei, essas duas garotinhas vivem aventuras imaginárias baseadas no folclore japonês, enquanto presenciam a ausência da mãe por motivo de doença e as saídas do pai por ser o provedor familiar. Significa que você tem muita sorte. Mas, nem sempre é possível encontrá-lo”. Meu Amigo Totoro (1988), de Hayao Miyazaki, expressa o que há de doce no olhar das crianças. O filme retrata aflições, amor familiar e muita magia, entregando esperança a um Japão pós segunda guerra mundial.</p>       
    </div>

      <div >
      <img className={Styles.timg} src="https://t.ctcdn.com.br/3lslGOvEdv9K8IJ7D2laNtD-4Lk=/1600x900/smart/i385237.jpeg" alt="" />
      </div>
      </reactFragment>
    )
}

