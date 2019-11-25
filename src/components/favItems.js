import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { DelChosen } from '../index';


const mapStateToProps = (state) => {
    if (state.chosen) {
        return {
            chosen: state.chosen
        }
    }
}

function FavItem(props) {
    let [anchorEl, setAnchorEl] = useState(null);
    let [open, setOpen] = useState(false);
    let [openChosen, setOpenChosen] = useState(false);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
        setOpenChosen(false);

    };
    const copyUrl = (props) => {
        navigator.clipboard.writeText(props);
    }
    const DeleteChosen = (id) => {
        props.dispatch(DelChosen(
            props.chosen.chosen[id].url
        ))
    }

    return (
        <Card>
            <CardContent>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => { DeleteChosen(props.id); setOpenChosen(true); }}>Удалить из избранного</MenuItem>
                    <MenuItem onClick={() => { copyUrl(props.url); setOpen(true); }}>Копировать URL</MenuItem>
                </Menu>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    message="URL скопирован"
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    open={openChosen}
                    autoHideDuration={1000}
                    onClose={handleClose}
                    message="Статья удалена из избранного"
                    action={[
                        <IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography variant="h5" color="textSecondary">
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="display more actions" edge="end" onClick={handleClick}>
                            <MoreIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Typography variant="h5" component="h2">
                    {props.description}
                </Typography>
                <Typography>
                    <Button size="small" href={props.url}>Читать больше на Wikipedia</Button>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default connect(mapStateToProps)(FavItem);