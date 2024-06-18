'use client';
// import { Checkbox } from 'payload/components/forms';
import { Category } from '../../../../payload/payload-types';
import { Checkbox } from '../../../_components/CheckBox';
import { HR } from '../../../_components/HR';
import { RadioButton } from '../../../_components/RadioButton';
import { useFilter } from '../../../_providers/Filter';
import classes from './index.module.scss';
import React from 'react';

const Filters = ({ categories }: { categories: Category[] }) => {
  const { categoryFilters, setCategoryFilters, setSort, sort } = useFilter();
  // setCategoryFilters([]);

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      // uncheck and create new categoryFilters array
      const updatedCategories = categoryFilters.filter(id => id !== categoryId);
      setCategoryFilters(updatedCategories);
    } else {
      setCategoryFilters([...categoryFilters, categoryId]);
    }
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  return (
    <div className={classes.filters}>
      <h5 className={classes.title}>Filter</h5>

      <div>
        <h6 className={classes.title}>Product Categories</h6>
        <div className={classes.categories}>
          {categories.map(cat => {
            const isSelected = categoryFilters.includes(cat.id);
            return (
              <Checkbox
                key={cat.id}
                value={cat.id}
                label={cat.title}
                isSelected={isSelected}
                onClickHandler={() => handleCategories(cat.id)}
              />
            );
          })}
        </div>
        <HR />
        <h6 className={classes.title}>Sort By</h6>
        <div className={classes.categories}>
          <RadioButton
            label="Latest First"
            value="-createdAt"
            isSelected={sort === '-createdAt'}
            groupName="sort"
            onRadioChange={handleSort}
          />
          <RadioButton
            label="Oldest First"
            value="createdAt"
            isSelected={sort === 'createdAt'}
            groupName="sort"
            onRadioChange={handleSort}
          />
        </div>
        {/* FIXME: add a button to query out, as immediate changes are causing problems */}
      </div>
    </div>
  );
};

export default Filters;
