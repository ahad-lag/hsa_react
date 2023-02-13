import { useState } from 'react';
import NotFound from '../../../router/notFound';
import StepsNavigationInsertSupply from './stepsNavigationInsertSupply';
import AddressInsertSupplyTab from './tabs/addressInsertSupplyTab';
import AdvancedLegalInsertSupplyTab from './tabs/advancedLegalInsertSupplyTab';
import ElementaryInsertSupplyTab from './tabs/elementaryInsertSupplyTab';
import PeopleInsertSupplyTab from './tabs/peopleInsertSupplyTab';

const InsertSupply = () => {

    const [ currentTab , setCurrentTab ] = useState<number>(8)

    const tabHandler = () => {
        switch(currentTab) {
            case 1 : return <ElementaryInsertSupplyTab />;
            case 2 : return <AdvancedLegalInsertSupplyTab />;
            case 3 : return <AddressInsertSupplyTab />;
            case 4 : return <PeopleInsertSupplyTab />;
            case 5 : return <div>Perfect ahad</div>;
            default : return <div>یافت نشد</div>;
        }
    }

    return (
    <>
        <StepsNavigationInsertSupply currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {
            tabHandler()
        }
    </>
    )
}

export default InsertSupply;
