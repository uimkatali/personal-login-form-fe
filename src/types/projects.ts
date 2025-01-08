export interface TeamMemberDetails {
  roleName: string
  memberName: string
}
export interface Team {
  projectSponsor: TeamMemberDetails
  projectManager: TeamMemberDetails
  technicalEngineer: TeamMemberDetails
  electricalEngineer: TeamMemberDetails
  mechanicalTechnicial: TeamMemberDetails
  startUpTTandTLeader: TeamMemberDetails
  snoLeader: TeamMemberDetails
  imPillarCoach: TeamMemberDetails
  costEngineer: TeamMemberDetails
  pkPlatformPCISDirector: TeamMemberDetails
  qaLeader: TeamMemberDetails
  itotLeader: TeamMemberDetails
}

export interface ProjectsData {
  projectName: string
  projectAcronym: string
  projectTeam: Team
}
