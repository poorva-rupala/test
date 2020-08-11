import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

/** Style  */
const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0px 52px 1px 52px'
    },
    row: {
        marginTop: '12px'
    },
    search: {
        marginTop: '12px',
        float: 'right',
        marginRight: '50px'
    },
    searchText: {
        marginTop: '12px',
        float: 'right',
        width: '25%'
    },
    headerText: {
        float: 'left',
        fontSize: '30px',
        marginLeft: '98px',
    },
    searchIcon: {
        margin: '11px 14px 0px -44px'
    },
    mainHeader: {
        marginTop: '12px'
    },
    uploadText: {
        color: 'blue',
        paddingTop: '4px',
        paddingLeft: '9px'
    },
    fileUpload: {
        display: 'flex'
    },
    colorBlue: {
        color: 'blue'
    },
    disabledFile: {
        display: 'none'
    }
}));


/** Show request type data along with search functionality */
export default function CenteredGrid(props) {
    const classes = useStyles();
    const [searchData, setSearchData] = useState('')
    const [filteredData, setFilteredData] = useState([])
    const [showSearch, setShowSearch] = useState(false)

    /** re-render component based on search result changes */
    useEffect(() => {
        setFilteredData(props.sampleData.filter((item) => item.type.toLowerCase().includes(searchData)));
    }, [searchData])

    /** search functionality */
    const filterRequestTypes = (event) => {
        setSearchData(event.target.value)
    }

    return (
        <>
            <div className={classes.mainHeader}>
                <span className={classes.headerText}><DescriptionIcon className={classes.searchIcon} />Select Request Type</span>
                <SearchIcon onClick={() => setShowSearch(!showSearch)} className={classes.search} />
                {showSearch && <TextField className={classes.searchText} id="standard-basic" onChange={(event) => filterRequestTypes(event)} />}

            </div>
            <Grid container>
                {
                    filteredData.map((item) => {
                        return (
                            <Grid className={classes.row} item xs={12} key={item.id}>
                                <Paper className={classes.paper}>
                                    <div><DescriptionIcon /></div>
                                    <div>{item.type}</div>
                                    <div>Download Template </div>
                                    <div>
                                        <div className={classes.fileUpload}>
                                            <input type="file" id="selectedFile" className={classes.disabledFile}  />
                                            <CloudUploadIcon className={classes.colorBlue} onClick={() => document.getElementById('selectedFile').click()} />
                                            <span className={classes.uploadText}>Upload File</span>
                                        </div>
                                    </div>
                                </Paper>
                            </Grid>
                        )
                    })
                }

            </Grid>
        </>
    );
}
