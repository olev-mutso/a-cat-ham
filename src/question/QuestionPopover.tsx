import * as React from 'react';
import { Popover, Typography, Button } from '@mui/material';
import { FormattedMessage } from 'react-intl';


export const QuestionPopover: React.FC<{ text: string }> = ({ text }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button variant="contained" onClick={handleClick}><FormattedMessage id='questionnaire-enText.label' /></Button>
      <Popover
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Typography p={2}>{text}</Typography>
      </Popover>
    </div>
  );
}
