import React, { useEffect, useState, useRef, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import cn from 'classnames';

export interface IEditConfirmState {
    isEditMode: boolean;
    setIsEditMode: (newValue: boolean) => void;
    toSave: boolean;
    setToSave: (newValue: boolean) => void;

}



export default (Component: React.ComponentType<IEditConfirmState>) => {
    const EditConfirmState = () => {
        const [isEditMode, setIsEditMode] = useState<boolean>(false);
        const [toSave, setToSave] = useState<boolean>(false);
        const editMenuRef = useRef(null);

        const listener = useCallback(
            (event: MouseEvent) => {
                const element: any = editMenuRef.current;

                if (element && element.contains(event.target)) {
                    return;
                }
                setIsEditMode(false);
            },
            [])

        useEffect(() => {
            document.addEventListener('click', listener);

            return () => document.removeEventListener('click', listener);
        }, [listener]);

        const setEditMode = () => {
            setIsEditMode(currState => !currState)
        }
        const showEditOption = isEditMode ? (<><span onClick={() => setEditMode()}>Exit</span><span>Enter</span></>) : (<span onClick={() => setEditMode()}>Edit</span>);
        return (
            <div ref={editMenuRef} className='edit-confirm-state-container'>
                <Card className='card-container'>
                    <div className='header-option-container'>
                        {showEditOption}
                    </div>
                    <div className='main-option-container'>
                        <Component
                            isEditMode={isEditMode}
                            setIsEditMode={setIsEditMode}
                            toSave={toSave}
                            setToSave={setToSave}
                        />
                    </div>
                </Card>
            </div>

        );
    };

    return EditConfirmState;
};
