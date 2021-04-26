import { render } from '@testing-library/react';
import InputText from 'components/inputs/InputText';

describe('InputText', () => {
    it('renders correctly', () => {
        const tree = render(<InputText id="search" name="search" />);

        expect(tree).toMatchSnapshot();
    });

    it('renders correct styles', () => {
        render(<InputText id="search" name="search" />);

        const headerClass = InputText({id: "search", name: "search"}).type.styledComponentId;
        const MyHeaderRoots = document.getElementsByClassName(headerClass);
        const style = window.getComputedStyle(MyHeaderRoots[0]);

        expect(style.color).toBe('rgb(100, 116, 139)');
        expect(style.padding).toBe('5px 10px');
    });
});
