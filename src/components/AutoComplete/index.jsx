import { useState, useEffect } from 'react';
import AutocompleteInputDebounce from './AutocompleteInputDebounce';

function index() {

    return (
        <div className="content mt-5">
            <div>
                <h3 className="mb-5">
                    React autocomplete example with hooks.
                </h3>


                <AutocompleteInputDebounce />
            </div>

        </div>
    );
}

export default index;

