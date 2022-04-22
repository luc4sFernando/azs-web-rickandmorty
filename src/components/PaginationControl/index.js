import { ControlContainer, Title, Wrapper } from './style';
import { MdNavigateNext } from 'react-icons/md';
import PropTypes from 'prop-types';
const PaginationControl = ({ count, setPageNumber, pages }) => {
  console.log(count);
  return (
    <ControlContainer>
      <Title>Episódios</Title>
      <Wrapper>
        {pages.prev && (
          <MdNavigateNext
            size='50px'
            onClick={() => setPageNumber((current) => current - 1)}
            style={{ transform: 'rotate(180deg)', cursor: 'pointer' }}
          />
        )}

        {pages.next && (
          <MdNavigateNext
            size='50px'
            onClick={() => setPageNumber((current) => current + 1)}
            style={{ cursor: 'pointer' }}
          />
        )}
      </Wrapper>
    </ControlContainer>
  );
};

PaginationControl.propTypes = {
  count: PropTypes.number,
  setPageNumber: PropTypes.func,
  pages: PropTypes.object,
};

export default PaginationControl;
