## Come avviare l'Interfaccia Utente da GitHub:
* Visita il link: [Interfaccia Lavandry](https://is-g22.github.io/lavandry-ui/#/)


## Come avviare l'Interfaccia Utente da Remoto:
1. Scarica la cartella **lavandry-ui** sul tuo pc (o clona da git)
2. Apri il file home.html su chrome

L'interfaccia punta nativamente all'API hostata su Heroku.
Se si desidera invece collegare l'interfaccia ad una API avviata localmente, bisogna andare nel file *variables.js* e cambiare l'API_URL da "**https://lavadry.herokuapp.com/api/**" a "**http://localhost:3000/api/**". Se avete utilizzato una porta diversa dalla porta 3000 per l'API, ricordatevi di inserire la porta corretta.
* NOTA: Le Cors Policies bloccano l'uso di LottieFiles se si apre solo il file html da Chrome. Conviene avviare la pagina da Live Server.
