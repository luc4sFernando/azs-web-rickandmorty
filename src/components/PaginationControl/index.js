import { ControlContainer, Wrapper, PageTitle } from './style';
import { MdNavigateNext } from 'react-icons/md';
import PropTypes from 'prop-types';
const PaginationControl = ({ setPageNumber, pages }) => {
  return (
    <ControlContainer>
      <PageTitle>Episódios</PageTitle>
      <Wrapper>
        {pages.prev && (
          <MdNavigateNext
            size='50px'
            onClick={() => setPageNumber((current) => current - 1)}
            style={{
              transform: 'rotate(180deg)',
              cursor: 'pointer',
              color: 'black',
            }}
          />
        )}

        {pages.next && (
          <MdNavigateNext
            size='50px'
            onClick={() => setPageNumber((current) => current + 1)}
            style={{ cursor: 'pointer', color: 'black' }}
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
