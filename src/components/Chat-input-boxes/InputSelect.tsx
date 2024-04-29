import { useState, FormEvent } from "react"

interface Props{
    onSendMessage       : (message: string, selectedOption: string) => void;
    placeHolder         ?: string; 
    disableCorrections  ?: boolean
    options             : Option[];
}

interface Option{
   id   : string;
   text : string ;
}

export const InputSelect = ({onSendMessage, placeHolder, disableCorrections = false, options}: Props)  => {
    const [MyMessage, setMyMessage] = useState("")
    const [selectedOption, setSelectedOption] = useState<string>('')

    const handleSenMessage = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if( MyMessage.trim().length === 0 ) return;
        if( selectedOption === '' ) return;

        onSendMessage(MyMessage, selectedOption)
        setMyMessage("")
    }

  return (
    <form 
        onSubmit={ handleSenMessage }
        className='flex flex-row items-center h-16 rounded-xl bg-white w-full px-4'
    >
        <div className="flex-grow">
            <div className="flex">
                <input 
                    type="text" 
                    name="message" 
                    id="message"
                    autoFocus 
                    className='w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'
                    placeholder={placeHolder}
                    autoComplete={ disableCorrections ? 'on' : 'off' }
                    autoCorrect={ disableCorrections ? 'on' : 'off' }
                    spellCheck={ disableCorrections ? 'true' : 'false' }
                    value={MyMessage}
                    onChange={(e) => setMyMessage( e.target.value )}
                />

                <select 
                    name="select" 
                    className='w-2/5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10'
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}
                >
                    <option value=''>Seleccione</option>
                    {
                        options.map(({ id, text }) => (
                            <option key={id} value={id}>{text}</option>
                        ))
                    }
                </select>
            </div>
        </div>

        <div className="ml-4">
            <button className='btn-primary'>
                <span className='mr-2'>Enviar</span>
                <i className='fa-regular fa-paper-plane'></i>
            </button>
        </div>
    </form>
  )
}