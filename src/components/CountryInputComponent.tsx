import { useState } from 'react';
import Select, { SingleValue  } from 'react-select';

type PropsType = {
    country: string
    setCountry: React.Dispatch<React.SetStateAction<string>>
    country2: string
    setCountry2: React.Dispatch<React.SetStateAction<string>>
    setIsFirstInputActive: React.Dispatch<React.SetStateAction<boolean>>
    countryNameList: string []
}

type OptionType = {
    value: string;
    label: string;
}

const CountryInputComponent = ({setCountry, setCountry2, setIsFirstInputActive, countryNameList }: PropsType) => {

    const [selectedOptions1, setSelectedOptions1] = useState<SingleValue<OptionType>>();
    const [selectedOptions2, setSelectedOptions2] = useState<SingleValue<OptionType>>();

    const optionList: OptionType[] = countryNameList.map(name => {
        let countryOption = {value: name.toLowerCase(), label: name}
        return countryOption
    })

    const handleSelectOne = (data: SingleValue<OptionType>) => {
        setSelectedOptions1(data);
        if (data) {
            setCountry(data.value)
            setIsFirstInputActive(true)
        }
    }

    const handleSelectTwo = (data: SingleValue<OptionType>) => {
        setSelectedOptions2(data);
        if (data) {
            setCountry2(data.value)
            setIsFirstInputActive(false)
        }
    }

    return (
        <>
            <div id="select1">
                <Select
                    options={optionList}
                    placeholder="Select country!"
                    value={selectedOptions1}
                    onChange={handleSelectOne}
                    menuPosition="fixed"/>
            </div>

            <div id="select2">
                <Select
                    options={optionList}
                    placeholder="Select another country!"
                    value={selectedOptions2}
                    onChange={handleSelectTwo}
                    menuPosition="fixed"/>
            </div>
        </>
    )
}

export default CountryInputComponent