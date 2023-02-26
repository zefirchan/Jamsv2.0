class account {
        constructor (props) {
            const {firstName, lastName, address, dateOfBirth,accCreateDate, activated, suspended, pwExpired,suspensionStart,suspensionEnd,prevPass,userID,PW} = props
            Object.assign(this,props)

            
            

            var now = new Date();
            var mo = String(now.getMonth() + 1).padStart(2,'0');
            var yyyy = now.getFullYear();
            var yy = yyyy.toString().substr(-2)

            this.role = 'User'
            this.accCreateDate = now
            this.activated = false
            this.suspended = false
            this.pwExpired = false
            this.prevPass = []
            this.userID = this.firstName[0] + this.lastName + mo + yy



 }
       
}

const testAdmin = new account ({
    
    firstName: 'Stephan',
    lastName: 'Mah',
    address: '1986 Driving Lane, Lawrenceville, GA, 30046',
    dateOfBirth: 'June, 28, 1999',

    
    


})

console.log(testAdmin);