import './styles.css'

export default function CardLayout({ Page, Content }){
  return(
    <main class='card_layout'>
      <div class='card_layout-main'>
        <div class='card_layout-content'>
          <Page />
        </div>
        <img id='card_layout-image' src={Content} />
      </div>
    </main>
  )
}