class Validator {
    constructor(config) {
        this.elementsConfig = config;
        this.errors = {}

        this.generateErrorsObject();
        this.inputListener();
    }

    generateErrorsObject() {
        for (let field in this.elementsConfig) {
            this.errors[field] = []
        }
    }

    inputListener() {
        let inputSelector = this.elementsConfig

        for (let field in inputSelector) {
            let selector = `input[name="${field}"]`
            let el = document.querySelector(selector);

            el.addEventListener('input', this.validate.bind(this))
        }
    }

    validate(e) {
        let elField = this.elementsConfig;
        let field = e.target;
        let fieldName = field.getAttribute('name')
        let fieldValue = field.value


        this.errors[fieldName] = []

        if (elField[fieldName].required) {
            if (fieldValue === "") {
                this.errors[fieldName].push('Polje je prazno')
            }
        }

        if (elField[fieldName].email) {
            if (!this.validateEmail(fieldValue)) {
                this.errors[fieldName].push('Neispravna email adresa')
            }
        }


        if (fieldValue.length < elField[fieldName].minlength || fieldValue.length > elField[fieldName].maxlength) {
            this.errors[fieldName].push(`Polje mora imati minimalno ${elField[fieldName].minlength} i maksimalno ${elField[fieldName].maxlength} karaktera`)

        }

        if (elField[fieldName].matching) {
            let matchingEl = document.querySelector(`input[name="${elField[fieldName].matching}]`)

            if (fieldValue != matchingEl) {
                this.errors[fieldName].push('Lozinke se ne poklapaju')
            }

            if (this.errors[fieldName].length === 0) {
                this.errors[fieldName] = []
                this.errors[elFields[fieldName].matching] = []
            }
        }
        this.populateErrors(this.errors);

    }



    validateEmail(email) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            return true;
        }
        return false;
    }

    populateErrors(errors) {
        for (const elem of document.querySelectorAll('ul')) {
            elem.remove()
        }

        for (let key of Object.keys(errors)) {
            let parentElement = document.querySelector(`input[name="${key}"]`).parentElement
            let errorsElement = document.createElement('ul')
            parentElement.appendChild(errorsElement)

            errors[key].forEach((error) => {
                let li = document.createElement('li')
                li.innerText = error;
                errorsElement.appendChild(li)
            })
        }
    }

}

