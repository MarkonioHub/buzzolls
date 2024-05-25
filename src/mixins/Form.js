import { toRaw } from "@vue/reactivity"

export const Form = {
    methods: {
        _sendForm(URL, data) {
            fetch(URL, { method: "POST", body: data })
                .then(function(res) { return res })
                .then(function() {})
                .catch((error) => {
                    console.log(error)
                })
        },
        _validateForm(formObject, refs) {
            let isValid = true
            initValidate()
            if (isValid) return returnFormData()

            function initValidate() {
                // eslint-disable-next-line
                for (const [key, value] of Object.entries(formObject)) {
                    if (!validate(value)) {
                        isValid = false
                        return
                    }
                }
            }

            function validate (value) {
                let result = true
                if (value.required && !value.value) {
                    setError(value)
                    result = false
                }
                if (value.validType === "phone" && value.value.length < 18) {
                    setError(value)
                    result = false
                }
                return result
            }

            function setError (value) {
                value.error = "Заполните поле"
                if (refs) {
                    const input = refs[`${value.name}`]
                    const y = input.getBoundingClientRect().top + window.pageYOffset - 100
                    window.scrollTo({top: y, behavior: 'smooth'})
                }
            }

            function returnFormData () {
                const data = toRaw(formObject)
                const sendData = {}
                // eslint-disable-next-line
                for (const [key, value] of Object.entries(data)) {
                    sendData[`${value.name}`] = value.value
                }
                return sendData
            }
        },
    }
}
