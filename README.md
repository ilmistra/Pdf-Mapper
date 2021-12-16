# Pdf-Mapper
Servizio webGIS che consente la georeferenziazione e la visualizzazione geografica di una qualsiasi tavola cartografica in Pdf di cui siano note la scala, l'orientamento e il datum geodetico

# Installazione
Scaricare l'intero repository e installarlo in una directory accessibile via web

# Documentazione

Nella schermata iniziale inserire :

- il nome del comune italiano a cui fa riferimento la tavola Pdf da mappare
- l'URL del file Pdf (accessibile senza credenziali)
- il datum geodetico della tavola (in dubbio selezionate WGS84 / UTM zona  32N) 


![Schermata 2021-12-16 alle 19 07 03](https://user-images.githubusercontent.com/1397034/146426007-d15b12c4-4859-40a9-8327-c3100cb3b912.png)

Nella pagina di navigazione geografica comparirà l'immagine della tavola Pdf in scala 1:5000 posizionata in modo non preciso sul territorio del comune indicato.
Correggete la scala di rappresentazione e la rotazione della tavola agendo sui pulsanti blu. Per indicare una scala diversa da quelle proposte, digitatela nel campo disponibile senza i caratteri "1:" ( ad es. 1:7500 indicate 7500 ), confermando con il tasto Invio.
Per la georeferenziazione precisa dell'immagine in mappa :

- individuate un punto noto in mappa (ed es. lo spigolo della chiesa) e spostate il mirino tondo rosso su quel punto.

Per semplficare l'operazione potete spegnere o rendere più trasparente il layer con della tavola da mappare
- cercate sull'immagine Pdf la posizione dello stesso spigolo e spostate il marker azzurro sullo stesso punto. L'immagine verrà traslata automaticamente in modo che il puntatore rosso e quello azzurro coincidano.
- verificate, modificando la trasparenza, la precisione dell'allineamento tra l'immagine e la mappa sottostante.

Nel caso che immagine e mappa non diano uan sovrapposizione accettabile, i problemi possono derivare da un errata scala riportata sulla tavola Pdf, un non corretto allineamento Nord-Sud, o un datum geodetico diverso da quello indicato nella schermata iniziale.
