const languages =
{
  en: {
    errorapi: "It's taking too long! The API may be unreachable.",
    giorni: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    mesi: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    menu: {
      prenotazioni: "Reservations",
      guasto: "Report failure",
      nuovaprenotazione: "New Reservation",
      tecnico:"Technician"
    },
    prenotazioni: {
      titolo: "Reservations List",
      caricamento: "Loading...",
      caricamentofallito: "Error: taking too much time to load. The API might be currently not reachable.",
      pren: {
        prenotazione: "Reservation",
        lavatrice: "Washing Machine",
        cancella: "Delete Reservation",
        apri: "OPEN DOOR",
      },
      confermatesto: "Are you sure you want to delete this Reservation?",
      confermacancella: "Delete",
      annulla: "Cancel",
      successocancellazione: "Your Reservation has been successfully deleted.",
      fallimentocancellazione: "ERROR: it is not possible to delete the Reservation.",
      successoapertura: "The door has been successfully opened.",
      fallimentoapertura: "ERROR: it is not possible to open the door",
      nuovaprenotazione: "Make a new Reservation",
      maxpren: "ERROR: maximum number of active Reservations has been reached.",
      caricamento: "Loading..."
    },
    nuovaprenotazione: {
      titolo: "New Reservation",
      minuti: "minutes",
      conferma: "Confirm this Reservation?",
      buttonconferma: "Confirm",
      successo: "Your Reservation has been successfully saved.",
      lista: "Go back to the Reservations List",
      max: "ERROR: maximum number of active Reservations has been reached.",
      tipo:"Choose the type of wash you want to carry out:",
      giorno:"Choose the day:",
      slot:"Choose the time:",

    },
    guasto: {
      titolo: "Report failure",
      select:"Select a Wahisng Machine",
      form:"Failure description:",
      send:"SEND REPORT",
      complete:"Report sent successfully! The technicians will solve the problem as soon as possible.",
      placeholder:"It is leaking water on all sides!"
    
    },
    tipolavaggio: ["","Fast", "Delicate", "30 Degrees"],
    lavatrice: { bottone: { bloccata: "Unlock", sbloccata: "Lock" } },
    tecnico: { titolo: "Washing Machines" }
  },
  it: {
    errorapi: "Ci sta mettendo troppo tempo! L'API potrebbe essere non raggiungibile.",
    giorni: ["Domenica", "Luned??", "Marted??", "Mercoled??", "Gioved??", "Venerd??", "Sabato"],
    mesi: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    menu: {
      prenotazioni: "Prenotazioni",
      guasto: "Segnala guasto",
      nuovaprenotazione: "Nuova Prenotazione",
      tecnico:"Tecnico"
    },
    prenotazioni: {
      titolo: "Lista Prenotazioni",
      caricamento: "Caricamento in corso...",
      caricamentofallito: "Ci sta mettendo troppo tempo! L'API potrebbe essere non raggiungibile.",
      pren: {
        prenotazione: "Prenotazione",
        lavatrice: "Lavatrice",
        cancella: "Cancella Prenotazione",
        apri: "APRI SPORTELLO",
      },
      confermatesto: "Sei sicuro che vuoi cancellare questa prenotazione?",
      confermacancella: "Conferma",
      annulla: "Annulla",
      successocancellazione: "La Prenotazione ?? stata cancellata con successo",
      fallimentocancellazione: "ERRORE: Non ?? stato possibile cancellare la prenotazione",
      successoapertura: "Lo sportello ?? stato aperto con successo!",
      fallimentoapertura: "ERRORE: Non ?? stato possibile aprire la lavatrice",
      nuovaprenotazione: "Effettua nuova Prenotazione",
      maxpren: "ERRORE: hai raggiunto il numero massimo di Prenotazioni.",
      caricamento: "Caricamento in corso..."
    },
    nuovaprenotazione: {
      titolo: "Nuova Prenotazione",
      minuti: "minuti",
      conferma: "Confermare la seguente Prenotazione?",
      buttonconferma: "Conferma Prenotazione",
      successo: "La Prenotazione ?? stata effettuata con successo!",
      lista: "Torna alla lista delle Prenotazioni",
      max: "Numero massimo di prenotazioni raggiunto!",
      tipo:"Scegli il tipo di lavaggio che vuoi effettuare:",
      giorno: "Seleziona il giorno:",
      slot:"Seleziona  l'ora:",


    },
    guasto: {
      titolo: "Segnala un Guasto",
      select:"Seleziona la lavatrice da segnalare:",
      form:"Descrivi brevemente il guasto:",
      send:"INVIA SEGNALAZIONE",
      complete:"Segnalazione inviata con successo! I tecnici provvederanno a risolvere il problema il prima possibile.",
      placeholder:"Perde acqua da tutte le parti!"
    },
    tipolavaggio: ["","Rapido", "Delicati", "30 Gradi"],
    lavatrice: { bottone: { bloccata: "Sblocca", sbloccata: "Blocca" } },
    tecnico: { titolo: "Lavatrici" }
  }
}
