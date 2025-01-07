import React, { useState } from 'react'
import { TextField, Button, Typography, Grid, Paper } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store/store'
import { postProject } from '../../redux/reducers/projectReducers/projectSlice'

const CreateProjectForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { loading, error } = useSelector((state: any) => state.projects)

  const [projectName, setProjectName] = useState('')
  const [projectAcronym, setProjectAcronym] = useState('')
  const [team, setTeam] = useState({
    projectSponsor: { roleName: '', memberName: '' },
    projectManager: { roleName: '', memberName: '' },
    technicalEngineer: { roleName: '', memberName: '' },
    electricalEngineer: { roleName: '', memberName: '' },
    mechanicalTechnicial: { roleName: '', memberName: '' },
    startUpTTandTLeader: { roleName: '', memberName: '' },
    snoLeader: { roleName: '', memberName: '' },
    imPillarCoach: { roleName: '', memberName: '' },
    costEngineer: { roleName: '', memberName: '' },
    pkPlatformPCISDirector: { roleName: '', memberName: '' },
    qaLeader: { roleName: '', memberName: '' },
    itotLeader: { roleName: '', memberName: '' },
  })

  const handleSubmit = () => {
    const projectData = {
      projectName,
      projectAcronym,
      projectTeam: team,
    }
    dispatch(postProject(projectData))
  }

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h4">Create a Project</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Project Name"
            value={projectName ? projectName : ''}
            onChange={e => setProjectName(e.target.value)}
          />
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          handleSubmit()
        }}
        style={{ marginTop: '20px' }}
      >
        Submit
      </Button>
    </Paper>
  )
}

export default CreateProjectForm
