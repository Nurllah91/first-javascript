function discount(tickets){

    if(tickets > 200){
       const firstTicketPrice = 100 * 100;
       const secondTicketPrice = 100 * 90;
       let restTickets = tickets - 200;
       const restTicketPrice = restTickets * 70;
         const totalPrice = firstTicketPrice + secondTicketPrice + restTicketPrice;
         return totalPrice;
    }else if(tickets > 100){
        const firstTicketPrice = 100 * 100;
        const restTickets = tickets - 100;
        let restTicketPrice = restTickets * 90;
        let totalPrice = firstTicketPrice + restTicketPrice;
        return totalPrice;
    }else{
        let totalPrice = tickets * 100;
        return totalPrice;
    }
}




const myTickets = discount(200);
console.log(myTickets);