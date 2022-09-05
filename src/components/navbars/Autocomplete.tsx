// Lots of help from here: https://codesandbox.io/s/github/algolia/autocomplete/tree/next/examples/react-renderer?file=/src/Autocomplete.tsx
import {
  AutocompleteOptions,
  AutocompleteState,
  createAutocomplete,
} from '@algolia/autocomplete-core';
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia';
import { Hit } from '@algolia/client-search';
import algoliasearch from 'algoliasearch/lite';
import React, { useEffect, useRef, useMemo } from 'react';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import { ISpecs } from '../../types';
import { useNavigate } from 'react-router';

const searchClient = algoliasearch('DJ3G6SKSEW', '955dd0b5882aa1a41f7d3d281f874bd3');

type MyState = ISpecs & {
  objectID: string;
};

type AutocompleteItem = Hit<MyState>;

export function Autocomplete(props: Partial<AutocompleteOptions<AutocompleteItem>>) {
  const navigate = useNavigate();
  const [autocompleteState, setAutocompleteState] = React.useState<
    AutocompleteState<AutocompleteItem>
  >({
    collections: [],
    completion: null,
    context: {},
    isOpen: false,
    query: '',
    activeItemId: null,
    status: 'idle',
  });
  const autocomplete = useMemo(
    () =>
      createAutocomplete<
        AutocompleteItem,
        React.BaseSyntheticEvent,
        React.MouseEvent,
        React.KeyboardEvent
      >({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: 'watches',
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: 'watches',
                      query,
                      params: {
                        hitsPerPage: 10,
                      },
                    },
                  ],
                });
              },
            },
          ];
        },
        ...props,
      }),
    [props],
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const { getEnvironmentProps } = autocomplete;

  useEffect(() => {
    if (!formRef.current || !panelRef.current || !inputRef.current) {
      return undefined;
    }

    const { onTouchStart, onTouchMove } = getEnvironmentProps({
      formElement: formRef.current,
      inputElement: inputRef.current,
      panelElement: panelRef.current,
    });

    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);

    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, [getEnvironmentProps, formRef, inputRef, panelRef]);
  return (
    <div className='aa-Autocomplete' {...autocomplete.getRootProps({})}>
      <form ref={formRef} {...autocomplete.getFormProps({ inputElement: inputRef.current })}>
        <InputGroup width='100%'>
          <InputLeftElement pointerEvents='none' children={<BsSearch color='gray' />} />
          <Input
            variant='outline'
            maxWidth='70%'
            ref={inputRef}
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
            focusBorderColor='gray'
            onBlur={() => {
              setAutocompleteState({ ...autocompleteState, isOpen: false });
            }}
          />
        </InputGroup>
      </form>
      {autocompleteState.isOpen && (
        <Box
          ref={panelRef}
          className={[
            'aa-Panel',
            'aa-Panel--desktop',
            autocompleteState.status === 'stalled' && 'aa-Panel--stalled',
          ]
            .filter(Boolean)
            .join(' ')}
          {...autocomplete.getPanelProps({})}
          width={'50%'}
        >
          <Box className='aa-PanelLayout aa-Panel--scrollable'>
            {autocompleteState.collections.map((collection, index) => {
              const { source, items } = collection;

              return (
                <section key={`source-${index}`} className='aa-Source'>
                  {items.length > 0 && (
                    <ul className='aa-List' {...autocomplete.getListProps()}>
                      {items.map((item) => {
                        return (
                          <li
                            key={item.objectID}
                            className='aa-Item'
                            {...autocomplete.getItemProps({ item, source })}
                            onClick={() => navigate(`/watch/${item.objectID}`)}
                          >
                            <div className='aa-ItemWrapper'>
                              <div className='aa-ItemContent'>
                                <div className='aa-ItemContentBody'>
                                  <div className='aa-ItemContentTitle'>
                                    <strong>{item.general.brand_name}</strong>{' '}
                                    <strong>{item.general.model_name}</strong>
                                  </div>
                                  <div className='aa-ItemContentDescription'>
                                    <span>{item.general.model_number}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
          </Box>
        </Box>
      )}
    </div>
  );
}
