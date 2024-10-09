/**
 * Copyright (c) 2023, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 LLC. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import MuiTabs, {TabsProps as MuiTabsProps} from '@mui/material/Tabs';
import clsx from 'clsx';
import {ElementType, forwardRef, ForwardRefExoticComponent, MutableRefObject, ReactElement} from 'react';
import type {WithWrapperProps} from '../../models/component';
import composeComponentDisplayName from '../../utils/compose-component-display-name';
import Box from '../Box';
import Divider from '../Divider';
import './tabs.scss';

export type TabsProps<C extends ElementType = ElementType> = {
  component?: C;
} & Omit<MuiTabsProps, 'component'>;

const COMPONENT_NAME: string = 'Tabs';

const Tabs: ForwardRefExoticComponent<TabsProps> & WithWrapperProps = forwardRef(
  <C extends ElementType>(
    {className, ...rest}: TabsProps<C>,
    ref: MutableRefObject<HTMLButtonElement>,
  ): ReactElement => {
    const classes: string = clsx('oxygen-tabs', className);

    return (
      <Box className={classes}>
        <MuiTabs ref={ref} {...rest} />
        <Divider />
      </Box>
    );
  },
) as ForwardRefExoticComponent<TabsProps> & WithWrapperProps;

Tabs.displayName = composeComponentDisplayName(COMPONENT_NAME);
Tabs.muiName = COMPONENT_NAME;

export default Tabs;
