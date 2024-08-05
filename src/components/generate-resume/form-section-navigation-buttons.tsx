// components/NavigationButtons.tsx
import React from 'react';
import { ArrowLeft, ArrowRight, CirclePlus, X } from 'lucide-react';

interface NavigationButtonsProps {
  currentIndex: number;
  totalItems: number;
  onPrev: () => void;
  onNext: () => void;
  onAdd: () => void;
  onRemove: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
  disableRemove?: boolean;
}

const FormSectionNavigationButtons: React.FC<NavigationButtonsProps> = ({
  currentIndex,
  totalItems,
  onPrev,
  onNext,
  onAdd,
  onRemove,
  disablePrev = false,
  disableNext = false,
  disableRemove = false,
}) => {
  return (
    <div className='flex justify-between mt-4'>
        <div className='flex gap-4'>
            <button
                onClick={onPrev}
                disabled={disablePrev}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
            >
                <ArrowLeft className='h-5 w-5' />
                <p className='ml-1'>Previous</p>
            </button>
            <button
                onClick={onNext}
                disabled={disableNext}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
            >
                <p className='mr-1'>Next</p>
                <ArrowRight className='h-5 w-5' />
            </button>
        </div>
        <div className='flex gap-4'>
            <button
                onClick={onAdd}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
            >
                <CirclePlus className='h-5 w-5' />
                <p className='ml-1'>Add</p>
            </button>
            <button
                onClick={onRemove}
                disabled={disableRemove}
                className='bg-neutral-900 border-2 p-2 rounded-lg flex items-center hover:opacity-90 disabled:cursor-default disabled:opacity-50'
            >
                <X className='h-5 w-5' />
                <p className='ml-1'>Remove</p>
            </button>
        </div>
    </div>
  );
};

export default FormSectionNavigationButtons;
