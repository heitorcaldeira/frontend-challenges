import { darkTheme } from '../../../assets/styles/themes';
import { renderWithProviders } from '../../../utils/testing';
import IncrementDecrement from '../IncrementDecrement';

describe('IncrementDecrement', () => {
  it('should render with default props', () => {
    const incMock = jest.fn();
    const deckMock = jest.fn();
    const { container } = renderWithProviders(
      <IncrementDecrement
        onIncrement={incMock}
        onDecrement={deckMock}
        current={10}
      />,
      {
        theme: darkTheme,
      }
    );

    const btnInc = container.querySelector('#inc') as HTMLElement;
    const btnDesc = container.querySelector('#dec') as HTMLElement;
    btnInc.click();
    btnDesc.click();

    expect(btnInc).toBeInTheDocument();
    expect(btnDesc).toBeInTheDocument();
    expect(incMock).toHaveBeenCalledTimes(1);
    expect(deckMock).toHaveBeenCalledTimes(1);
  });
});
