import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

/**
 * Legend for the set threshold 
 */
class Legend extends React.Component {
  render() {
    return (
      <div>
        <h4> Legend </h4>
        <Table basic='very' celled collapsing>
          <Table.Body>

            <Table.Row>
              <Table.Cell>
                <Header.Content>
                  <Icon name="check circle" color="green" size="big" />
                </Header.Content>
              </Table.Cell>

              <Table.Cell>
                Nominal
                    </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Header.Content>
                  <Icon name="exclamation triangle" color="yellow" size="big" />
                </Header.Content>
              </Table.Cell>
              <Table.Cell>
                Warning
                  </Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Header.Content>
                  <Icon name="window close" color="red" size="big" />
                </Header.Content>
              </Table.Cell>
              <Table.Cell>
                Critical
                    </Table.Cell>
            </Table.Row>

          </Table.Body>
        </Table>
      </div>
    )
  }
}
export default Legend;