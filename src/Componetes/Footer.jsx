import styles from'./components.module.css'

import maps from '../imagens_Gifs/maps.PNG'
export const Footer = () => {
  return (
    <div>
        <div className={styles.footer}>
          <div className={styles.infos}>
    <p>© 2025 Clube da Lâmina. Todos os direitos reservados.</p>

    <p>Rua dos Barbearias, 123 - Cidade Fictícia , Brasil</p>

    <p>Seg a Sáb: 9h às 19h | WhatsApp: (61) 9 9999-9999</p>

          </div>
    <div className={styles.social}>
    </div>
          <div className={styles.maps}>
                  <img src={maps} alt="Mapa apenas ilustrativa!"  />
          </div>
  </div>
    </div>
  )
}
