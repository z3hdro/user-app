import {Dispatch, SetStateAction} from 'react';

export interface BottomButtonsProps {
  firstButtonTitle: string;
  onFirstButtonPress: () => void;
  secondButtonTitle: string;
  onSecondButtonPress: () => void;
}

export interface SearchBarProps {
  setSearchList: Dispatch<SetStateAction<any>>;
}
