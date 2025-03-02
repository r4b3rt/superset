/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { render, screen, userEvent } from 'spec/helpers/testing-library';
import ButtonCell from './index';
import { exampleRow } from '../fixtures';

test('renders with default props', async () => {
  const clickHandler = jest.fn();
  const BUTTON_LABEL = 'Button Label';

  render(
    <ButtonCell
      label={BUTTON_LABEL}
      key={5}
      index={0}
      row={exampleRow}
      onClick={clickHandler}
    />,
  );
  await userEvent.click(screen.getByText(BUTTON_LABEL));
  expect(clickHandler).toHaveBeenCalled();
});
